const express = require("express");
const router = express.Router();
const Table = require("../models/table");
router.post("/addTable", (req, res) => {
  res.send("addTable");
  console.log("Add Table req: ", req.body);
  const table = new Table(req.body);
  table.save((err, table) => {
    if (err) {
      console.log("Error: ", err);
      return res.status(400).json({ error: "Failed to create table" });
    } else {
      return res.status(200).json(table);
    }
  });
});

router.get("/tables", (req, res) => {
  Table.find().exec((err, tbl) => {
    return res.status(200).json(tbl);
  });
});
module.exports = router;
