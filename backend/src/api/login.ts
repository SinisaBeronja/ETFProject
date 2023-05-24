import twilio from "twilio";

export function initLogin(app: any) {
  const twilioPhoneNumber = "+13023039792";
  const accountSid = "AC121acc5bf2c5a3ad93c9913b83bdd878";
  const authToken = "5950e354ccd4a8f537670547697a7c1b";
  const client = twilio(accountSid, authToken);

  let loggedInUsers: any = {};

  app.post("/api/login", (req: any, res: any) => {
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

  app.post("/api/verify", (req: any, res: any) => {

    const { code, token } = req.body;
    const user = loggedInUsers[token];
  
    if (user && user.code == code) {
      res.json({ success: true });
    } else {
      res.json({ success: false }); 
    }
  
  });
}



