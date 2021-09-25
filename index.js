const express = require("express");
const Router = require("./DataSiswa");
const app = express();

app.use("/DataSiswa", Router);

app.get("/", (req, res) => {
  res.send("Selamat Datang Di Data Center Siswa Indonesia.");
});

app.listen(8080, () => {
  console.log(`Server Running at http://localhost:${8080}`);
});
