"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApi = exports.connection = void 0;
const express_1 = __importStar(require("express"));
const routes_1 = require("./tsoa/generated/routes");
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const mysql2_1 = __importDefault(require("mysql2"));
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
exports.connection = mysql2_1.default.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "projekat3" // ime baze u mySQL
});
function initApi() {
    const app = (0, express_1.default)();
    app.use((0, express_1.urlencoded)({ extended: true }));
    app.use((0, express_1.json)());
    app.use((0, cors_1.default)());
    (0, routes_1.RegisterRoutes)(app);
    const storage = multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/'); // specify the directory where files will be stored
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname); // specify the name of the uploaded file
        }
    });
    const upload = (0, multer_1.default)({ storage: storage });
    function uploadFile(req, res) {
        upload.array('myFiles')(req, res, function (err) {
            if (err) {
                return res.status(500).send(err);
            }
        });
    }
    app.post('/upload', uploadFile);
    const port = 5000;
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'stefantmusic@hotmail.com',
            pass: 'wsnzfrlkmmbcyxlt'
        }
    });
    app.use(bodyParser.json());
    // Handle password reset request
    app.post('/password-reset', (req, res) => {
        const email = req.body.email;
        console.log(email);
        // Generate a unique token
        const token = crypto.randomBytes(20).toString('hex');
        // Store the token in the database
        exports.connection.query('INSERT INTO password_reset_tokens SET ?', { email, token }, (error) => {
            if (error) {
                console.error('Error storing password reset token:', error);
                return res.status(500).json({ message: 'Internal server error' });
            }
            // Send password reset email
            const mailOptions = {
                from: 'stefantmusic@hotmail.com',
                to: email,
                subject: 'Password Reset',
                text: `Please click the following link to reset your password: http://localhost:4200/reset-password/${token}`
            };
            transporter.sendMail(mailOptions, (error) => {
                if (error) {
                    console.error('Error sending password reset email:', error);
                    return res.status(500).json({ message: 'Internal server error' });
                }
                return res.sendStatus(200);
            });
        });
    });
    app.listen(port, () => {
        console.log(`Aplikacija slusa na http://localhost:${port}`);
    });
}
exports.initApi = initApi;
//# sourceMappingURL=initApi.js.map