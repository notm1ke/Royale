import express from 'express';
import * as Royale from '../lib/royale';

import { ErrorResponse } from '../lib/royale';

const router = express.Router();

router.get('/', (req, res) => res.render('index'));

router.get('/u/:id', async (req, res) => {
    let user: any | ErrorResponse = await Royale.getComprehensiveUser(req.params.id);
    if (user.message && user.code) {
        return res.render('error', { message: user.message });
    }

    res.render('user', { user });
});

router.get('/lb/:region/:limit', async (req, res) => {
    const { country, limit } = req.params;
    if (parseFloat(limit) == NaN) {
        
    }

    Royale.getLeaderboard(country, parseFloat(limit)).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json({ code: 400, message: err.message });
    });
});

export default router;