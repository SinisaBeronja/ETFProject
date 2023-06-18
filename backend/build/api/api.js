"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApi = void 0;
const db_1 = require("./db");
const upload_1 = require("./upload");
const email_1 = require("./email");
const passwordReset_1 = require("./passwordReset");
const login_1 = require("./login");
const cors_1 = __importDefault(require("cors"));
const sendMail_1 = require("./sendMail");
function initApi(app) {
    app.use((0, cors_1.default)());
    // Initialize email service
    const transporter = (0, email_1.initEmailService)();
    // Initialize password reset functionality
    (0, passwordReset_1.initPasswordReset)(app, db_1.connection, transporter);
    (0, sendMail_1.initSendMail)(app);
    // Initialize login functionality
    (0, login_1.initLogin)(app);
    // Handle file upload
    app.post("/upload", upload_1.uploadFile);
}
exports.initApi = initApi;
//# sourceMappingURL=api.js.map