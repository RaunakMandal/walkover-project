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

exports.tableByUser = (req, res) => {
  console.log(req.params);
  Table.find({ userID: req.params.user }, (err, table) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.json(table);
  });
};

exports.tableById = (req, res) => {
  Table.findById(req.params.id, (err, table) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.json(table);
  });
};

exports.deleteTable = (req, res) => {
  Table.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.json({ success: true });
  });
};
