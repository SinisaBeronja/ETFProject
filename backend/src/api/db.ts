import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "projekat3"
});