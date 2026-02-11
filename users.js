import express from "express";
import { db } from "./database.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    await db.run(
      "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)",
      [nome, email, senha]
    );

    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get("/", async (req, res) => {
  const users = await db.all("SELECT * FROM users");
  res.json(users);
});

export default router;
