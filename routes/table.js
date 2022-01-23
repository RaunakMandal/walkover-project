const express = require("express");
const {
  addTable,
  tableByUser,
  tableById,
  deleteTable,
} = require("../controllers/table");
const router = express.Router();
router.post("/addTable", addTable);
router.get("/tables/:user", tableByUser);
router.get("/table/:id", tableById);
router.delete("/delete/:id", deleteTable);
module.exports = router;
