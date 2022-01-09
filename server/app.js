require("dotenv").config();

const express = require("express");
const app = express();
const { auth } = require("express-openid-connect");
const cors = require("cors");
const mongoose = require("mongoose");
const route = require("./routes/table");
const bodyparser = require("body-parser").json();

const port = process.env.PORT || 8080;
const baseURL =
  process.env.BASE_URL || "https://walkover-tableapp.herokuapp.com";

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: baseURL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

console.log(config);

app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(bodyparser);
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
app.use(express.urlencoded({ extended: false }));
app.use("/", route);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
  console.log(req.oidc.user);
});
