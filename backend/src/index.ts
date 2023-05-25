import express, { json, urlencoded } from "express";
import { initApi } from "./api/api"; // Update the import statement
import cors from "cors";
import { RegisterRoutes as registerTsoaRoutes } from "./api/tsoa/generated/routes";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

initApi(app);
app.use(cors());

registerTsoaRoutes(app);

const port = 5000;

app.listen(port, () => {
  console.log(`Aplikacija slusa na http://localhost:${port}`);
});