const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todos1");

const todo = mongoose.Schema({
  title: String,
  description: String,
  completed: { type: Boolean, default: false },
});

const todos = mongoose.model("todos", todo);
module.exports = todos;
