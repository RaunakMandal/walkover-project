require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const route = require("./routes/table");
const bodyparser = require("body-parser").json();

const port = process.env.PORT || 8080;

app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(bodyparser);
app.use(express.urlencoded({ extended: false }));
app.use("/api", route);

// require(".//client/build/index.html");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(".//client/build/")); // serve the static react app
  app.get("/*", (req, res) => {
    // don't serve api routes to react app
    res.send(req.url + " is not a valid route");
  });
  console.log("Serving React App...");
}

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });
