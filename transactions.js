import express from "express";
import { db } from "./database.js";


const router = express.Router();


router.post("/", async (req, res) => {
  const { user_id, tipo, valor, descricao } = req.body;

  await db.run(
    `INSERT INTO transactions (user_id, tipo, valor, descricao, data)
     VALUES (?, ?, ?, ?, datetime('now'))`,
    [user_id, tipo, valor, descricao]
  );

  res.status(201).json({ message: "Transação criada" });
});


router.get("/:user_id", async (req, res) => {
  const { user_id } = req.params;

  const transacoes = await db.all(
    "SELECT * FROM transactions WHERE user_id = ?",
    [user_id]
  );

  res.json(transacoes);
});

export default router;
