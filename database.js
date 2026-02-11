import sqlite3 from "sqlite3";
import {open} from "sqlite";

export const db = await open({
    filename:"./src/financeiro.db",
    driver:sqlite3.Database
});
await db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT UNIQUE,
    senha TEXT
  );

  CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    tipo TEXT,
    valor REAL,
    descricao TEXT,
    data TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);