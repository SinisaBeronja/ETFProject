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
const twilio = require('twilio');
exports.connection = mysql2_1.default.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "ZlatnoIPlavo.",
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
        // Fetch the user's password from the database based on the email
        const query = `SELECT lozinka FROM rukovodioc WHERE mailRukovodioca = ?`;
        exports.connection.query(query, [email], (err, results) => {
            if (err) {
                console.error('Failed to fetch password from the database:', err);
                res.status(500).send('Failed to fetch password');
            }
            else {
                if (JSON.stringify(results) !== "[]") {
                    const password = JSON.stringify(results).slice(13, -3);
                    // Send the email
                    const mailOptions = {
                        from: 'stefantmusic@hotmail.com',
                        to: email,
                        subject: 'Zaboravljena lozinka',
                        text: `Vasa lozinka je: ${password}`,
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            console.error('Failed to send email:', error);
                            res.status(500).send('Failed to send email');
                        }
                        else {
                        }
                    });
                }
                else {
                    res.status(404).send('User not found');
                }
            }
        });
    });
    // Twilio configuration
    const accountSid = 'AC121acc5bf2c5a3ad93c9913b83bdd878';
    const authToken = 'input code here';
    const twilioPhoneNumber = '+13023039792';
    const client = twilio(accountSid, authToken);
    let loggedInUsers = {};
    app.post('/api/login', (req, res) => {
        const { username, phoneNumber } = req.body;
        // Authenticate the user (check username and password)
        // ...
        // Generate a verification code
        const code = Math.floor(100000 + Math.random() * 900000);
        loggedInUsers[username] = { username, code };
        // Send the verification code via SMS
        client.messages
            .create({
            body: `Your verification code is: ${code}`,
            from: twilioPhoneNumber,
            to: phoneNumber
        })
            .then(() => {
            res.json({ success: true, token: username });
        })
            .catch((err) => {
            console.error(err);
            res.json({ success: false });
        });
    });
    app.post('/api/verify', (req, res) => {
        const { code, token } = req.body;
        const user = loggedInUsers[token];
        if (user && user.code == code) {
            res.json({ success: true });
        }
        else {
            res.json({ success: false });
        }
    });
    app.listen(port, () => {
        console.log(`Aplikacija slusa na http://localhost:${port}`);
    });
}
exports.initApi = initApi;
//# sourceMappingURL=initApi.js.map