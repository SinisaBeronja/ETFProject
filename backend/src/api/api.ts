import { connection } from "./db";
import { uploadFile } from "./upload";
import { initEmailService } from "./email";
import { initPasswordReset } from "./passwordReset";
import { initLogin } from "./login";
import cors from "cors";
import { initSendMail } from "./sendMail";

export function initApi(app: any) {

  app.use(cors());

  // Initialize email service
  const transporter = initEmailService();

  // Initialize password reset functionality
  initPasswordReset(app, connection, transporter);

  initSendMail(app);

  // Initialize login functionality
  initLogin(app);

  // Handle file upload
  app.post("/upload", uploadFile);
}

