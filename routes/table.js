const express = require("express");
const { addTable, tableByuser } = require("../controllers/table");
const router = express.Router();
router.post("/addTable", addTable);
router.get("/tables/:user", tableByuser);
module.exports = router;
