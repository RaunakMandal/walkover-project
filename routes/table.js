const express = require("express");
const {
  addTable,
  tableByUser,
  tableById,
  deleteTable,
  addRow,
} = require("../controllers/table");
const router = express.Router();
router.post("/addTable", addTable);
router.post("/addRow/:id", addRow);
router.get("/tables/:user", tableByUser);
router.get("/table/:id", tableById);
router.delete("/delete/:id", deleteTable);
module.exports = router;
