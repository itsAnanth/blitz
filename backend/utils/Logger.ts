class Logger {
    static DEV = process.env.ENV === 'DEV' ? true : false;

    static error(...message: string[]) {
        if (!Logger.DEV) return;

        console.error(...message);
    }
}

export default Logger;
