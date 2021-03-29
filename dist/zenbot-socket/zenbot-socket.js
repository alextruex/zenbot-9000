"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const socket_io_1 = __importDefault(require("socket.io"));
class ZenbotSocket {
    constructor(zenbot) {
        this.app = express_1.default();
        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        });
        this.server = this.app.listen(3001, () => {
            this.io = socket_io_1.default(this.server);
            console.log(chalk_1.default.green('[OK!] ZenbotSocket ready!'));
            this.io.on('connection', (socket) => {
                console.log(chalk_1.default.green('[OK!] A user connected.'));
            });
        });
    }
    disconnect() {
        console.log(chalk_1.default.yellow(['[WARNING!] ZenbotSocket disconnecting.']));
        this.server.close();
    }
}
exports.default = ZenbotSocket;
//# sourceMappingURL=zenbot-socket.js.map