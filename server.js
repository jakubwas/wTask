const express = require("express");

// Initilaze express
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Welcome " });
});

// Register user route
app.use("/api/users", require("./routes/users"));
// Log in user
app.use("/api/auth", require("./routes/auth"));
// Get user data specific for this user
app.use("/api/task-list", require("./routes/taskList"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
