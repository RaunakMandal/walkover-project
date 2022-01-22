const mongoose = require("mongoose");

var Fields = new mongoose.Schema({
  type: String,
  name: String,
  isPrimary: {
    type: Boolean,
    default: false,
  },
});

var Rows = new mongoose.Schema({
  data: [String],
});

var Table = new mongoose.Schema(
  {
    tableName: String,
    userID: String,
    fields: [Fields],
    rows: [Rows],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Table", Table);
