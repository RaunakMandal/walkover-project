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
app.use("/", route);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); // serve the static react app
  app.get(/^\/(?!api).*/, (req, res) => {
    // don't serve api routes to react app
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
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
