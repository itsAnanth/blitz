import crypto from 'crypto';

class Utils {
    static getMessageId(bytes: number = 8) {
        return `m_${crypto.randomBytes(bytes).toString('hex')}`;
    }

    static getUserId(bytes: number = 8) {
        return `u_${crypto.randomBytes(bytes).toString('hex')}`;
    }
}

export default Utils;