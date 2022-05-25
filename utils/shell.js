"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var _a = process.platform === 'win32' ? ['cmd', '/c'] : ['sh', '-c'], sh = _a[0], shFlag = _a[1];
var cmds = ['start:server', 'start:client'];
var children = [];
var _loop_1 = function (i) {
    var child = (0, child_process_1.spawn)(sh, [shFlag, "npm run ".concat(cmds[i])], {
        env: process.env
    });
    child.stdout.on('data', function (c) { return console.log("".concat(cmds[i], " >> ").concat(c)); });
    child.stdout.setEncoding('utf-8');
    child.on('message', function (message) {
        console.log("".concat(cmds[i], " >> ").concat(message.toString()));
    });
    child.on('close', function (code) {
        (code > 0) ?
            console.error("".concat(cmds[i], " failed with exit code ").concat(code))
            :
                console.log("".concat(cmds[i], " ended successfully"));
        (code > 0) && close(code);
    });
    child.cmd = cmds[i];
    children.push(child);
};
for (var i = 0; i < cmds.length; i++) {
    _loop_1(i);
}
function close(code) {
    var len, closed = 0, opened = 0;
    for (var i = 0, len_1 = children.length; i < len_1; i++) {
        if (!children[i].exitCode) {
            opened++;
            children[i].removeAllListeners('close');
            children[i].kill('SIGINT');
            console.log("".concat(children[i].cmd, " >> closing with SIGINT"));
            children[i].on('close', function () {
                closed++;
                if (opened == closed)
                    process.exit(code);
            });
        }
    }
    if (opened == closed)
        process.exit(code);
}
process.on('SIGINT', close);
