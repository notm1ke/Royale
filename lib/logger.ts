import moment from 'moment';

export enum Colors {
    RESET = "\x1b[0m",
    BRIGHT = "\x1b[1m",
    DIM = "\x1b[2m",
    UNDERSCORE = "\x1b[4m",
    BLINK = "\x1b[5m",
    REVERSE = "\x1b[7m",
    HIDDEN = "\x1b[8m",

    BLACK = "\x1b[30m",
    RED = "\x1b[31m",
    GREEN = "\x1b[32m",
    YELLOW = "\x1b[33m",
    BLUE = "\x1b[34m",
    MAGENTA = "\x1b[35m",
    CYAN = "\x1b[36m",
    WHITE = "\x1b[37m",

    BG_BLACK= "\x1b[40m",
    BG_RED = "\x1b[41m",
    BG_GREEN = "\x1b[42m",
    BG_YELLOW = "\x1b[43m",
    BG_BLUE = "\x1b[44m",
    BG_MAGENTA = "\x1b[45m",
    BG_CYAN = "\x1b[46m",
    BG_WHITE = "\x1b[47m"
}

export const Levels = Object.freeze({
    'info': {
        color: Colors.GREEN,
        text: 'INFO',
        symbol: '*'
    },
    'debug': {
        color: Colors.CYAN,
        text: 'DEV',
        symbol: 'ℹ'
    },
    'warn': {
        color: Colors.YELLOW,
        text: 'WARN',
        symbol: '⚠'
    },
    'error': {
        color: Colors.RED,
        text: 'ERR',
        symbol: '✖'
    }
});

export class Logger {

    /**
     * Logs a message
     * @param color    the color of the header
     * @param header   the module header
     * @param message  the message
     */
    static log(level, header: string, message: string) {
        if (!(level instanceof Object)) {
            console.log(`${this.wrap(Levels.warn.color, Levels.warn.symbol)} An error occurred while logging a message.`);
            return;
        }

        console.log(`${Colors.WHITE + '[' + moment().format('M/D/YYYY h:mm:ss A') + ']' + Colors.DIM} ${this.wrap(level.color, level.text)}${' '.repeat((level.text === Levels.error.text || level.text === Levels.debug.text) ? 2 : 1) + Colors.YELLOW + '|' + Colors.WHITE + ' [' + header + ']'} ${Colors.RESET + message}`);
    }

    static unlisted(message: string) {
        console.log(message);
    }

    /**
     * Logs an informational message
     * @param header   the module header
     * @param message  the message
     */
    static info(header: string, message: string) {
        this.log(Levels.info, header, message);
    }

    /**
     * Logs a warning
     * @param header   the module header
     * @param message  the message
     */
    static warn(header: string, message: string) {
        this.log(Levels.warn, header, message);
    }

    /**
     * Logs an error
     * @param header   the module header
     * @param message  the message
     */
    static severe(header: string, message: string) {
        this.log(Levels.error, header, message);
    }

    /**
     * Logs a thrown exception
     *
     * @param exception  the thrown exception
     * @param header     the module header
     * @param base       the base of the error
     */
    static except(exception: Error, header: string, base: string) {
        this.log(Levels.error, header, base + ': ' + exception);
    }

    /**
     * Wraps a string in a color
     * @param {Colors} color   the color to wrap it in
     * @param {string} content the content to be wrapped 
     */
    static wrap(color: Colors, content: string) {
        return `${color + content + Colors.RESET}`;
    }
}