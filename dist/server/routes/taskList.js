const express = require("express");
const auth = require("../middleware/auth");
const Task = require("../models/Task");

const router = express.Router();

// @route   GET api/task-list
// @desc    Get user's taskList
// @acces   Private
router.get("/", auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
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
router.put("/:id", auth, async (req, res) => {
  const { status } = req.body;

  try {
    let task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ msg: "Task not found" });

    // Make sure user owns contact
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    if (status === "completed") {
      task = await Task.findByIdAndUpdate(
        req.params.id,
        { status: "uncompleted" },
        { new: true }
      );
    } else if (status === "uncompleted") {
      task = await Task.findByIdAndUpdate(
        req.params.id,
        { status: "completed" },
        { new: true }
      );
    }

    res.json(task);
  } catch (err) {
    console.error(er.message);
    res.status(500).send("Server Error");
  }
});
// @route   DELETE api/task-list/:id
// @desc    Delete task
// @acces   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ msg: "Contact not found" });

    // Make sure user owns contact
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Task.findByIdAndRemove(req.params.id);

    res.json({ msg: "Task removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
