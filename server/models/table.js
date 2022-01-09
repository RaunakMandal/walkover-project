const mongoose = require("mongoose");

var Fields = new mongoose.Schema({
  type: String,
  name: String,
});

var Rows = new mongoose.Schema({
  data: [String],
});

var Table = new mongoose.Schema(
  {
    userID: String,
    fields: [Fields],
    rows: [Rows],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Table", Table);
