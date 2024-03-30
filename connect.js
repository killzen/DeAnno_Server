// connect.js

// 导入 MySQL 模块
import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root",
  database:"apiserver"
})