import express, { json, urlencoded } from "express";
import { RegisterRoutes as registerTsoaRoutes } from "./tsoa/generated/routes";
import cors from "cors";
import multer from "multer";

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
    upload.array('files', 12)(req, res, function(err: any) {
      if (err) {
        return res.status(500).send(err);
      }
      res.send('File uploaded successfully!');
    });
  }

  app.post('/upload', uploadFile);

  const port = 5000;

  app.listen(port, () => {
    console.log(`Aplikacija slusa na http://localhost:${port}`);
  });
}
