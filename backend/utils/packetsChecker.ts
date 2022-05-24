import { Message } from '../../shared/structures/Message';
import Logger from './Logger';

function check(packet: any) {
    const validTypes = Message.typesArray();

    if (!(
        packet.type &&
        packet.data &&
        validTypes.includes(packet.type) &&
        packet.data instanceof Array
    )) {
        Logger.error('Malformed packet');
        return;
    }
}

export default check;