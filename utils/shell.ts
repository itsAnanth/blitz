import { spawn } from 'child_process';
import type { ChildProcessWithoutNullStreams } from 'child_process';
import { config } from 'dotenv';

interface childProcess extends ChildProcessWithoutNullStreams {
    cmd: string;
}

config();

const [sh, shFlag] = process.platform === 'win32' ? ['cmd', '/c'] : ['sh', '-c'];
const cmds = ['start:server', 'start:client'];
const children: childProcess[] = [];


for (let i = 0; i < cmds.length; i++) {
    let child = spawn(sh, [shFlag, `npm run ${cmds[i]}`], {
        env: process.env,
    }) as childProcess;

    child.stdout.on('data', (c) => console.log(`${cmds[i]} >> ${c}`));

    child.stdout.setEncoding('utf-8');

    child.on('message', (message) => {
        console.log(`${cmds[i]} >> ${message.toString()}`);
    })

    child.on('close', (code) => {
        (code > 0) ?
            console.error(`${cmds[i]} failed with exit code ${code}`)
            :
            console.log(`${cmds[i]} ended successfully`);

        (code > 0) && close(code);
    })

    child.cmd = cmds[i];

    children.push(child as childProcess);
}

function close(code: number) {
    let len: number, closed: number = 0, opened: number = 0;

    for (let i = 0, len = children.length; i < len; i++) {
        if (!children[i].exitCode) {
            opened++;
            children[i].removeAllListeners('close');
            children[i].kill('SIGINT');
            console.log(`${children[i].cmd} >> closing with SIGINT`);
            children[i].on('close', function () {
                closed++;
                if (opened == closed)
                    process.exit(code);

            });
        }
    }
    if (opened == closed) process.exit(code);

}


process.on('SIGINT', close);