const express = require("express");
const { createTask, updateTask } = require("./type");
const cors = require("cors");
const todos = require("./user");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const data = req.body;
  const parsedData = createTask.safeParse(data);

  if (!parsedData.success) {
    res.status(403).json({ msg: "Wrong inputs!" });
    return;
  }

  const { title, description } = parsedData.data; // Access parsed data correctly

  await todos.create({
    title,
    description,
  });
  res.json({ msg: "Todo Created!" });
});

app.get("/todos", async (req, res) => {
  const todo = await todos.find({});
  res.json({ todo });
});

app.put("/completed", async (req, res) => {
  const data = req.body;
  const parsedData = updateTask.safeParse(data);

  if (!parsedData.success) {
    res.status(403).json({ msg: "Wrong inputs!" });
    return;
  }

  const { id } = parsedData.data; // Access parsed data correctly

  await todos.update(
    {
      _id: id,
    },
    { completed: true }
  );
  res.json({ msg: "Marked as complete!" });
});

app.listen(3000, () => {
  console.log("Server running!");
});
