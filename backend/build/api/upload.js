"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads'); // specify the directory where files will be stored
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
        else {
            res.status(200).send("Files uploaded successfully.");
        }
    });
}
exports.uploadFile = uploadFile;
//# sourceMappingURL=upload.js.map