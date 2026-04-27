const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("AUPP API is running successfully");
});

app.get("/courses", (req, res) => {
  res.json([
    { id: 1, name: "Cloud Automation using DevOps" },
    { id: 2, name: "Introduction to Web Development" }
  ]);
});

app.get("/grades", (req, res) => {
  res.json({
    student: "AUPP Student",
    course: "Cloud Automation",
    grade: "A"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`AUPP API running on port ${PORT}`);
});