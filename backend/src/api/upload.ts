import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // specify the directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // specify the name of the uploaded file
  }
});

const upload = multer({ storage: storage });

export function uploadFile(req: any, res: any) {
  upload.array('myFiles')(req, res, function(err: any) {
    if (err) {
      return res.status(500).send(err);
    }
    else {
      res.status(200).send("Files uploaded successfully.")
    }
  });
}