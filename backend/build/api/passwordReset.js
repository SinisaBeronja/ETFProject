"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPasswordReset = void 0;
function initPasswordReset(app, connection, transporter) {
    app.post("/password-reset", (req, res) => {
        const email = req.body.email;
        // Fetch the user's password from the database based on the email
        const query = `SELECT lozinka FROM rukovodioc WHERE mailRukovodioca = ?`;
        connection.query(query, [email], (err, results) => {
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
}
exports.initPasswordReset = initPasswordReset;
//# sourceMappingURL=passwordReset.js.map