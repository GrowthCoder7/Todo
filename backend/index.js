const express = require("express");
const app = express();
const { createTodo, completeTodo } = require("./types");
const todo = require("./users");

app.use(express.json());

app.post("/todos", async (req, res) => {
  const data = req.body;
  const parsedData = createTodo.safeParse(data);
  if (!parsedData.success) {
    res.status(401).send({ msg: "Wrong inputs!" });
  }
  await todo.create({
    title: parsedData.title,
    description: parsedData.description,
  });
  res.json({ msg: "Todo created!" });
});

app.get("/todos", async (req, res) => {
  const task = await todo.find({});
  res.json({ task });
});

app.put("/completed", async (req, res) => {
  const data = req.body;
  const parsedData = completeTodo.safeParse(data);
  if (!parsedData.success) {
    res.status(401).send({ msg: "Wrong inputs!" });
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({ msg: "Task marked as complete" });
});

app.listen(3000, () => {
  console.log("Server running!");
});
