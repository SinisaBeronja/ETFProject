const nodemailer = require("nodemailer");

export function initEmailService() {
  return nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "stefantmusic@hotmail.com",
      pass: "wsnzfrlkmmbcyxlt"
    }
  });
}