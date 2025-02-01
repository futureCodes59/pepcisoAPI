const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Jenil! Welcome to your first Node.js app!");
});

const PORT = 3009;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
