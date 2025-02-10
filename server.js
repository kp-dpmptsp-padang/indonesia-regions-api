const express = require("express");
const cors = require("cors");
const provinces = require("./data/provinces.json");

const app = express();
app.use(cors());

app.get("/provinces", (req, res) => {
  res.json(provinces);
});

app.get("/provinces/:id", (req, res) => {
  const province = provinces.find((p) => p.id == req.params.id);
  if (province) res.json(province);
  else res.status(404).json({ message: "Province not found" });
});

app.listen(4000, () => console.log("API is running on port 4000"));
