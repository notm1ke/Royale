import express from 'express';
import flash from 'connect-flash';
import moment from 'moment';
import path from 'path';
import ora from 'ora';
import env from 'dotenv';
import hbs from 'hbs';

import { Colors } from './lib/logger';
import log from './lib/logger';

import * as helpers from './lib/hbs_helpers';

import BaseRouter from './routes/index';

env.config();

const app = express();
const start = Date.now();
const logger = log('Royale');
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
        loader.succeed(`${logger.wrapColor(Colors.cyan, 'Royale')} has finished starting up. ${logger.wrapColor(Colors.dim, `(${parseFloat(Date.now() - start).toFixed(2)}ms)`)}`);
    });
}).catch((err) => {
    loader.fail(`A fatal error occurred preventing ${Colors.cyan}Royale${Colors.reset} from starting up.`);
    console.error(err.stack);
    process.exit(-1);
});