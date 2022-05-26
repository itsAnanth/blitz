import Logger from '../../shared/structures/Logger';
import { Message } from '../../shared/structures/Message';

function check(packet: Message) {
    const validTypes = Message.typesArray();
    const type = packet.type === 0 ? true : packet.type;

    if (!(
        type &&
        packet.data &&
        (packet.type >= 0 && packet.type < validTypes.length) &&
        packet.data instanceof Array
    )) return true;


    return false;
}

export default check;