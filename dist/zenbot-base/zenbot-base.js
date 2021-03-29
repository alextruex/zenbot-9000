"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const mysql_1 = __importDefault(require("mysql"));
class ZenbotBase {
    constructor(zenbot) {
        let host = process.env.MYSQL_HOST;
        let user = process.env.MYSQL_USER;
        let password = process.env.MYSQL_PASSWORD;
        let database = process.env.MYSQL_DATABASE;
        this.connection = mysql_1.default.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });
        this.connection.connect(function (err) {
            if (!err)
                console.log(chalk_1.default.green('[OK!] ZenbotBase ready!'));
            else
                console.log(chalk_1.default.red('[ERROR!] ' + err));
        });
        this.connection.query('INSERT INTO Users VALUES (5, "Tony", 50);', function (error, results, fields) {
            if (error)
                console.log(chalk_1.default.red('[ERROR!] ' + error));
            else
                console.log(chalk_1.default.green('[OK!] ' + results));
        });
    }
    disconnect() {
        this.connection.end();
        console.log(chalk_1.default.yellow(['[WARNING!] ZenbotBase disconnecting.']));
    }
}
exports.default = ZenbotBase;
//# sourceMappingURL=zenbot-base.js.map