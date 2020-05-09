import env from 'dotenv';
import cron from 'node-cron';

import { Client } from 'croyale';
import * as Player from 'croyale/lib/structures/Player'
import * as PlayerBattles from 'croyale/lib/structures/PlayerBattles'
import * as PlayerChest from 'croyale/lib/structures/PlayerChests'

import countries from './countries';
import * as localizer from './localize';

import { Colors } from './logger';
import log from './logger';

env.config();

const logger = log('API');
const Service = new Client(process.env.CR_API_KEY);

/**
 * Initializes the Ratelimiter in
 * order for the Cron job to be able
 * to access **_rateLimitRemaining**.
 */
const initRatelimiter = async () => {
    await getStatus();
};
initRatelimiter();

cron.schedule('* * * * *', () => {
    if (Service.Api._rateLimitRemaining <= 2) {
        logger.warn(`Ratelimit Warning: ${logger.wrapColor(Colors.magenta, Service.Api._rateLimitRemaining + ' requests')} remaining. ${logger.wrapColor(Colors.dim, `(${Service.Api._rateLimiter.requests.length} req${Service.Api._rateLimiter.requests.length > 1 ? 's' : ''}/sec)`)}`);
        return;
    }
    if (Service.Api._rateLimitRemaining == 0) {
        logger.warn(`Ratelimit Exceeded ${logger.wrapColor(Colors.dim, `(${Service.Api._rateLimiter.requests.length} req${Service.Api._rateLimiter.requests.length > 1 ? 's' : ''}/sec)`)}`);
        return;
    }
});

/**
 * Attempts to retrieve an object
 * containing the a comprehensive
 * overview of a given client.
 * 
 * @param {string} client_id  the client's id 
 * @returns {Promise<Object>} wrapped Player object
 */
export async function getComprehensiveUser(client_id) {
    let res = await getUser(client_id);
    if (res.code !== 200) {
        return { code: res.status, message: res.message };
    }

    let chests = await getChests(client_id);
    if (chests.code !== 200) {
        return { code: chests.status, message: chests.message };
    }

    let battles = await getBattles(client_id);
    if (battles.code !== 200) {
        return { code: battles.status, message: battles.message };
    }

    let status = await getStatus();
    if (status.health.status_text !== 'Operational') {
        return { code: 502, message: 'Bad Gateway' };
    }

    res.chests = chests;
    res.battles = battles;
    res.status = status;

    return res;
}

/**
 * Attempts to retrieve an object
 * containing an overview of the
 * given client parameter.
 * 
 * @param {string} client_id  the client's id
 * @returns {Promise<Player>} wrapped Player object
 */
export async function getUser(client_id) {
    const start = Date.now();
    return await Service.Users.getProfile(client_id).then((res) => {
        res.code = 200;
        res.link = parseFloat(Date.now() - start).toFixed(1);
        return res;
    }).catch((err) => {
        logger.except(err, `Error fetching ${client_id}`);
        if (err.error) {
            return { code: err.status, message: localizer.localizeHttpStatus(err.status) }
        }
        return { message: err };
    });
}

/**
 * Attempts to retrieve an object
 * containing upcoming chests for
 * the given client parameter.
 * 
 * @param {string} client_id         the client's id
 * @returns {Promise<PlayerChest[]>} object of PlayerChest items
 */
export async function getChests(client_id) {
    const start = Date.now();
    return await Service.Users.getChests(client_id).then((res) => {
        res.code = 200;
        res.link = parseFloat(Date.now() - start).toFixed(1);
        return res;
    }).catch((err) => {
        logger.except(err, `Error fetching ${client_id}'s chests`);
        if (err.error) {
            return { code: err.status, message: localizer.localizeHttpStatus(err.status) }
        }
        return { message: err };
    });
}

/**
 * Attempts to retrieve an object
 * containing previous battles
 * that the player has fought in.
 * 
 * @param {string} client_id           the client's id 
 * @returns {Promise<PlayerBattles[]>} object of PlayerBattle items
 */
export async function getBattles(client_id) {
    const start = Date.now();
    return await Service.Users.getBattles(client_id).then((res) => {
        res.code = 200;
        res.link = parseFloat(Date.now() - start).toFixed(1);
        return res;
    }).catch((err) => {
        logger.except(err, `Error fetching ${client_id}'s battles`);
        if (err.error) {
            return { code: err.status, message: localizer.localizeHttpStatus(err.status) }
        }
        return { message: err };
    })
}

/**
 * Attempts to retrieve the *resLimit*
 * amount of top positions on the
 * global ladder leaderboard.
 * 
 * @param {string} location the location 
 * @param {number} resLimit the result limit 
 * 
 * @returns {Promise<Object>} the object containing the leaderboard
 */
export async function getLeaderboard(location, resLimit) {
    const start = Date.now();
    let territory;
    for (const k in Object.entries(countries)) {
        let cur = countries[k];

        if (cur.name === location || cur.key === location) {
            territory = cur;
            break;
        }
    }

    if (!territory) {
        throw new Error(`Territory '${location}' not found.`);
    }

    let leaderboard = {};
    let limit = resLimit || 200;
    
    if (limit > 200) {
        throw new Error('Number of leaderboard entries may not exceed 200.');
    }

    let result = await Service.Api._get(`top/players/${location}`);

    result = result.slice(0, limit);
    leaderboard.region = territory.key;
    leaderboard.limit = limit;
    leaderboard.link = parseFloat(Date.now() - start).toFixed(1);
    
    Object.assign(leaderboard, result);
    return leaderboard;
}

/**
 * Attempts to retrieve the status
 * of our service in relation to
 * the upstream API.
 * 
 * @returns {Promise<Object>} the object containing our status
 */
export async function getStatus() {
    const start = Date.now();
    return await Service.Api._get(`version`).then((res) => {
        return {
            ratelimit: {
                status: false,
                status_text: 'Not Ratelimited',
                status_color: 'success'
            },
            health: {
                status: true,
                status_text: 'Operational',
                status_color: 'success'
            },
            code: 200,
            link: parseFloat(Date.now() - start).toFixed(1)
        }
    }).catch((err) => {
        if (!err.error && !err.status) {
            return {
                ratelimit: {
                    status: false,
                    status_color: 'Unknown',
                    status_text: 'danger'
                },
                health: {
                    status: false,
                    status_text: 'Offline',
                    status_color: 'danger'
                },
                code: 500,
                link: -1
            };
        }

        let health;

        switch(err.status) {
            case 400:
            case 401:
            case 404:
            case 429:
                health = 'Operational';
            case 500:
            case 503:
            case 522:
            default:
                health = 'Outage';
        }

        return {
            ratelimit: {
                status: err.status == 429,
                status_text: err.status == 429 ? 'Ratelimited' : 'Not Ratelimited',
                status_color: err.status == 429 ? 'danger' : 'success'
            },
            health: {
                status: health == 'Online',
                status_text: health,
                status_color: health == 'Online' ? 'success' : 'danger'
            },
            code: err.status,
            link: parseFloat(Date.now() - start).toFixed(1)
        }
    });
}

/**
 * Attempts to check whether the
 * given target exists within the
 * top *resLimit* in the given
 * country's leaderboard.
 *  
 * @param {string} tag      the client's id
 * @param {string} location the location
 * @param {number} limit    the result limit
 * 
 * @returns {Promise<Boolean>} if they are in the leaderboard
 */
export async function isTop(tag, location, limit) {
    return await getLeaderboard(location, limit).then((res) => {
        res = res.slice(0, limit);
        for (const k in Object.entries(res)) {
            let cur = res[k];

            if (cur.tag === tag) {
                return true;
            }
        }
        return false;
    }).catch((err) => {
        logger.except(err, `Error checking if ${tag} is in top ${limit} of the ${location} leaderboard.`);
        return false;
    });
}