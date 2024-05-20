const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todos");

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: { type: Boolean, default: false },
});

const todo = mongoose.model("todo", todoSchema);
module.exports = todo;
