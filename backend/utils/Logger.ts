/**
 * LOG LEVELS
 * 0 - info
 * 1 - errors
 */

class Logger {
    static LOG_LEVELS = { 
        0: 'info',
        1: 'errors'
    }
    static DEV = process.env.ENV === 'DEV' ? true : false;
    static LOG_LEVEL = process.env.LOG_LEVEL ?? -1;

    static error(...message: any[]) {
        if (!(Logger.DEV || Logger.LOG_LEVEL < 1)) return;

        console.error(...message);
    }

    static log(..._args: any[]) {
        if (!(Logger.DEV || Logger.LOG_LEVEL < 0)) return;

        console.log.apply(this, arguments as any);
    }
}

export default Logger;
