import express from 'express';
import * as Royale from '../lib/royale';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/u/:id', async (req, res) => {
    res.render('user', { user: await Royale.getComprehensiveUser(req.params.id) });
});

router.get('/lb/:countryCode/:limit', async (req, res) => {
    const country = req.params.countryCode;
    const limit = req.params.limit;

    Royale.getLeaderboard(country, limit).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json({ code: 400, message: err.message });
    });
});

export default router;