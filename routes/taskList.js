const express = require("express");
const auth = require("../middleware/auth");
const Task = require("../models/Task");

const router = express.Router();

// @route   GET api/task-list
// @desc    Get user's taskList
// @acces   Private
router.get("/", (req, res) => {
  res.send("Get user's task list");
});

// @route   POST api/task-list
// @desc    Add new task
// @acces   Private
router.post("/", [auth], async (req, res) => {
  const { name, priority, status } = req.body;

  try {
    const newTask = new Task({
      name,
      priority,
      status,
      user: req.user.id,
    });

    const task = await newTask.save();

    res.json(task);
  } catch (err) {
    console.error(er.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/task-list/:id
// @desc    Update task
// @acces   Private
router.put("/:id", (req, res) => {
  res.send("Update task");
});

// @route   DELETE api/task-list/:id
// @desc    Delete task
// @acces   Private
router.post("/:id", (req, res) => {
  res.send("Delete task");
});

module.exports = router;
