import express, { json, urlencoded } from "express";
import { RegisterRoutes as registerTsoaRoutes } from "./tsoa/generated/routes";
import cors from "cors";
import multer from "multer";
import mysql from "mysql2";
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const twilio = require('twilio');

export const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",  // sifra u workbencu
  database: "projekat3"     // ime baze u mySQL
})

export function initApi() {
  const app = express();

  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors())

  registerTsoaRoutes(app);

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // specify the directory where files will be stored
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // specify the name of the uploaded file
    }
  });
  
  const upload = multer({ storage: storage });
  
  function uploadFile(req: any, res: any) {
    upload.array('myFiles')(req, res, function(err: any) {
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
    connection.query('INSERT INTO password_reset_tokens SET ?', { email, token }, (error) => {
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
  
      transporter.sendMail(mailOptions, (error: any) => {
        if (error) {
          console.error('Error sending password reset email:', error);
          return res.status(500).json({ message: 'Internal server error' });
        }
  
        return res.sendStatus(200);
      });
    });
  });


  // Twilio configuration
const accountSid = 'AC121acc5bf2c5a3ad93c9913b83bdd878';
const authToken = '5950e354ccd4a8f537670547697a7c1b';
const twilioPhoneNumber = '+13023039792';
const client = twilio(accountSid, authToken);

let loggedInUsers : any = {};

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
    .catch((err : any) => {
      console.error(err);
      res.json({ success: false });
    });
});

app.post('/api/verify', (req, res) => {
  const { code, token } = req.body;
  console.log(code, token);
  const user = loggedInUsers[token];
  console.log(user, user.code, code);

  if (user && user.code == code) {
    console.log("true");
    res.json({ success: true });
  } else {
    console.log("false");
    res.json({ success: false });
  }
});

  app.listen(port, () => {
    console.log(`Aplikacija slusa na http://localhost:${port}`);
  });
}
