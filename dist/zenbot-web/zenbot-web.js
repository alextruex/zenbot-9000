"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
class ZenbotWeb {
    constructor(zenbot) {
        this.app = express_1.default();
        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        });
        this.server = this.app.listen(3000, () => {
            console.log(chalk_1.default.green('[OK!] ZenbotWeb ready!'));
        });
    }
    disconnect() {
        console.log(chalk_1.default.yellow(['[WARNING!] ZenbotWeb disconnecting.']));
        this.server.close();
    }
}
exports.default = ZenbotWeb;
//# sourceMappingURL=zenbot-web.js.map