"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initEmailService = void 0;
const nodemailer = require("nodemailer");
function initEmailService() {
    return nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "stefantmusic@hotmail.com",
            pass: "wsnzfrlkmmbcyxlt"
        }
    });
}
exports.initEmailService = initEmailService;
//# sourceMappingURL=email.js.map