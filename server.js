import express from "express";
import cors from "cors";
import "./database.js";
import usersRoutes from "./users.js";
import transactionsRoutes from "./transactions.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/transactions", transactionsRoutes);


app.get("/", (req, res) => {
  res.send("API Financeira ");
});

app.use("/users", usersRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
