const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.json({
    Nama: "Richard Muhammad",
    TanggalLahir: "14 Januari 1994",
    JenisKelamin: "Laki - Laki",
    Hobi: "Membaca Buku",
  });
});

module.exports = Router;
