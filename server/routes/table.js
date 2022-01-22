const express = require("express");
const { addTable } = require("../controllers/table");
const router = express.Router();
const Table = require("../models/table");
router.post("/addTable", addTable);

router.get("/tables", (req, res) => {
  Table.find().exec((err, tbl) => {
    return res.status(200).json(tbl);
  });
});
module.exports = router;
