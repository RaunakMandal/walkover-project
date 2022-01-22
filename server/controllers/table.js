const Table = require("../models/table");
exports.addTable = (req, res) => {
  // ok
  console.log(req.body);
  const table = new Table(req.body);
  table.save((err, table) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.json(table);
  });
};
