"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSendMail = void 0;
function initSendMail(app) {
    const nodemailer = require('nodemailer');
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.post('/api/sendEmail', (req, res) => {
        const { email, message } = req.body;
        // Create a nodemailer transporter with your email service credentials
        const transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: 'stefantmusic@hotmail.com',
                pass: 'wsnzfrlkmmbcyxlt'
            }
        });
        // Email options
        const mailOptions = {
            from: 'stefantmusic@hotmail.com',
            to: email,
            subject: 'Evaluacija projekta - komentar',
            text: message
        };
        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).json({ error: 'Error sending email' });
            }
            else {
                console.log(mailOptions);
                console.log('Email sent successfully');
                res.status(200).json({ message: 'Email sent successfully' });
            }
        });
    });
}
exports.initSendMail = initSendMail;
//# sourceMappingURL=sendMail.js.map