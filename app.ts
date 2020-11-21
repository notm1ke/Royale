import express from 'express';
import flash from 'connect-flash';
import path from 'path';
import ora from 'ora';
import env from 'dotenv';

import BaseRouter from './routes';
import * as helpers from './lib/hbs_helpers';

import { Logger, Colors } from './lib/logger';

env.config();

const app = express();
const start = Date.now();
const loader = ora('Starting up..').start();

new Promise(() => {
    helpers.init();

    app.use(express.static(path.join(__dirname, 'static')));
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'hbs');

    app.use(flash());
    app.disable('x-powered-by');

    app.use('/', BaseRouter);

    app.listen(process.env.PORT || 3000, () => {
        loader.succeed(`${Logger.wrap(Colors.CYAN, 'Royale')} has finished starting up. ${Logger.wrap(Colors.DIM, `(${parseFloat(String(Date.now() - start)).toFixed(2)}ms)`)}`);
    });
}).catch((err) => {
    loader.fail(`A fatal error occurred preventing ${Logger.wrap(Colors.CYAN, 'Royale')} from starting up.`);
    console.error(err.stack);
    process.exit(-1);
});