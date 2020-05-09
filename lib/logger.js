export const Colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",

    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",

    bgblack: "\x1b[40m",
    bgred: "\x1b[41m",
    bggreen: "\x1b[42m",
    bgyellow: "\x1b[43m",
    bgblue: "\x1b[44m",
    bgmagenta: "\x1b[45m",
    bgcyan: "\x1b[46m",
    bgwhite: "\x1b[47m"
}

export const Levels = Object.freeze({
    'info': {
        color: Colors.green,
        text: 'INFO',
        symbol: '*'
    },
    'debug': {
        color: Colors.cyan,
        text: 'DEBUG',
        symbol: 'ℹ'
    },
    'warn': {
        color: Colors.yellow,
        text: 'WARN',
        symbol: '⚠'
    },
    'error': {
        color: Colors.red,
        text: 'ERR',
        symbol: '✖'
    }
});

export default (title) => {

    class Logger {

        /**
         * Logs a message
         * @param color    the color of the header
         * @param message  the message
         */
        static log(level, message) {
            if (!(level instanceof Object)) {
                console.log(`${this.wrapColor(Levels.warn.color, Levels.warn.symbol)} An error occurred while logging a message.`);
                return;
            }
            console.log(`${this.wrapColor(level.color, level.symbol)} ${this.wrapColor(Colors.cyan, title + ':')} ${message}`);
        }

        /**
         * Logs an informational message
         * @param message  the message
         */
        static info(message) {
            this.log(Levels.info, message);
        }

        /**
         * Logs a debug message
         * @param message  the message
         */
        static debug(message) {
            if (process.env.STAGE === 'dev')
                this.log(Levels.debug, message);
        }

        /**
         * Logs a warning
         * @param message  the message
         */
        static warn(message) {
            this.log(Levels.warn, message);
        }

        /**
         * Logs an error
         * @param message  the message
         */
        static severe(message) {
            this.log(Levels.error, message);
        }

        /**
         * Logs a thrown exception
         *
         * @param exception  the thrown exception
         * @param base       the base of the error
         */
        static except(exception, base) {
            if (exception == '[object Object]') {
                return this.log(Levels.error, base + ': ' + JSON.stringify(exception));
            }
            this.log(Levels.error, base + ': ' + exception);
        }

        /**
         * Wraps a string in a color
         * @param {object} color   the color to wrap it in
         * @param {string} content the content to be wrapped 
         */
        static wrapColor(color, content) {
            return `${color + content + Colors.reset}`;
        }

    }

    return Logger;

};