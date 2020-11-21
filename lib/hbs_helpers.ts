import hbs from 'hbs';
import moment from 'moment';

export function init() {
    hbs.registerHelper('json', (e) => {
        return JSON.stringify(e);
    });

    hbs.registerHelper('jsonPretty', (e) => {
        return JSON.stringify(e, null, 3);
    });

    hbs.registerHelper('formatMillis', (e) => {
        if (isNaN(e)) {
            return 'some time ago';
        }
        return moment(parseFloat(e)).fromNow();
    });

    hbs.registerHelper('localizeNumber', (e) => {
        if (isNaN(e)) return e;
        return e.toLocaleString();
    });

    hbs.registerHelper('increment', (e) => {
        return e += 1;
    });

    hbs.registerHelper('capitalizeFirst', (e) => {
        if (e.length < 2) return e;
        return e.substring(0, 1).toUpperCase() + e.substring(1).toLowerCase();
    });

    hbs.registerHelper('pluralEnding', (e) => {
        if (isNaN(e)) return '';
        return e == 1 ? '' : 's';
    });

    hbs.registerHelper('getChestAsset', (e) => {
        switch (e) {
            case 'draft':
            case 'epic':
            case 'fortune':
            case 'giant':
            case 'gold-fortune':
            case 'gold':
            case 'king':
            case 'kinglegendary':
            case 'legendary':
            case 'lightning':
            case 'magical':
            case 'megalightning':
            case 'silver':
            case 'supermagical':
            case 'wooden':
                return `https://royaleapi.github.io/cr-api-assets/chests/chest-${e}.png`;
            default:
                return `https://royaleapi.github.io/cr-api-assets/chests/chest-king.png`;
        }
    });

    hbs.registerHelper('calculateAvgElixir', (cards) => {
        let sum = 0;

        for (const k in Object.entries(cards)) {
            sum += cards[k].elixir;
        }

        return parseFloat(String(sum / cards.length)).toFixed(1);
    });

    hbs.registerHelper('localizeHttpIcon', (e) => {
        if (isNaN(e) || (e < 100 || e > 520)) {
            return `<i class="fa fa-question-circle fa-fw text-danger" data-tippy="HTTP 2.0/${e}"></i>`;
        }
        if (e >= 400 && e <= 530) {
            return `<i class="fa fa-exclamation-circle fa-fw text-danger" data-tippy="HTTP 2.0/${e}"></i>`;
        }
        return `<i class="fa fa-check-circle fa-fw text-success" data-tippy="HTTP 2.0/${e}"></i>`;
    });

    hbs.registerHelper('latencyColor', (e) => {
        if (isNaN(e) || e < 0 || e > Infinity) {
            return 'danger';
        }
        if (e >= 0 && e <= 450) {
            return 'success';
        }
        if (e > 450 && e < 1000) {
            return 'warning';
        }
        return 'danger';
    });
}