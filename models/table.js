const mongoose = require("mongoose");

var Fields = new mongoose.Schema({
  type: String,
  name: String,
  primary: Boolean,
});

var Table = new mongoose.Schema(
  {
    tableName: String,
    userID: String,
    fields: [Fields],
    rows: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Table", Table);
