const { z } = require("zod");

const createTask = z.object({
  title: z.string(),
  description: z.string(),
});

const updateTask = z.object({
  id: z.string(),
});

module.exports = {
  createTask,
  updateTask,
};
