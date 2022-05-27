class Logger {

    static DEV = false;

    static log(..._args: any[]) {
        if (!Logger.DEV) return;
        console.log.apply(this, arguments as any);
    }

    static error(..._args: any[]) {
        if (!Logger.DEV) return;
        console.error.apply(this, arguments as any);
    }

    static warn(..._args: any[]) {
        if (!Logger.DEV) return;
        console.warn.apply(this, arguments as any);
    }

    static info(..._args: any[]) {
        if (!Logger.DEV) return;
        console.info.apply(this, arguments as any);
    }

    static debug(..._args: any[]) {
        if (!Logger.DEV) return;
        console.debug.apply(this, arguments as any);
    }

    static logc(text: string, color: string) {
        console.log('%c[' + `%c${text}` + '%c]', 'color: white', `color: ${color}`, 'color: white');
    }
}

export default Logger;
