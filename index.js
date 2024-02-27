const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send({ hi: "There" });
});
app.get("/home", (req, res) => {
  res.send({ hi: "Home" });
});
app.listen(PORT, () => {
  console.log(`Server is listening at the port ${PORT}`);
});
