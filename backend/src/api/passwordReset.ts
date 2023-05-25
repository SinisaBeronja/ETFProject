export function initPasswordReset(app: any, connection: any, transporter: any) {
  app.post("/password-reset", (req: any, res: any) => {
    
    const email = req.body.email;
  
    // Fetch the user's password from the database based on the email
    const query = `SELECT lozinka FROM rukovodioc WHERE mailRukovodioca = ?`;
    connection.query(query, [email], (err: any, results: any) => {
      if (err) {
        console.error('Failed to fetch password from the database:', err);
        res.status(500).send('Failed to fetch password');
      } else {
        if (JSON.stringify(results) !== "[]") {
          const password = JSON.stringify(results).slice(13, -3);
  
          // Send the email
          const mailOptions = {
            from: 'stefantmusic@hotmail.com',
            to: email,
            subject: 'Zaboravljena lozinka',
            text: `Vasa lozinka je: ${password}`,
          };
  
          transporter.sendMail(mailOptions, (error: any, info: { response: any; }) => {
            if (error) {
              console.error('Failed to send email:', error);
              res.status(500).send('Failed to send email');
            } else {
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