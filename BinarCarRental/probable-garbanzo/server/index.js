const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Menyajikan file statis dari direktori 'public'
app.use(
  "/images",
  express.static(path.join(__dirname, "../", "public", "images"))
);

// Konfigurasi Express untuk menyajikan file statis dari direktori 'css'
app.use("/css", express.static(path.join(__dirname, "../", "public", "css")));

// Konfigurasi Express untuk menyajikan file statis dari direktori 'scripts'
app.use(
  "/scripts",
  express.static(path.join(__dirname, "../", "public", "scripts"))
);

// Rute untuk "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "public", "index.html"));
});

// Rute untuk "/cars"
app.get("/cars", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "public", "cariMobil.html"));
});

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
