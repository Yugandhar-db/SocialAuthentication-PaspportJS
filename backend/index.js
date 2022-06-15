const cookieSession = require("cookie-session");
const session = require("express-session");
const express = require("express");
const passport = require("passport");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const cors = require("cors");
const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECERT,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running");
});
