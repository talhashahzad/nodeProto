const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const bcrypt = require("bcrypt");
const helmet = require("helmet");
var morgan = require("morgan");

const userRoutes = require("./Routes/userRoutes");
const activityRoutes = require("./Routes/acitivityRoutes");
const acitivityModel = require("./Model/activityModel");
const User = require("./Model/userModel");

const app = express();

app.use(helmet());
morgan("tiny");

app.use(
  session({
    secret: "AbXvkL9qse",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.listen(8000, () => {
  console.log("server running on port 8000");
});

const mongodbAtlas =
  "mongodb+srv://talha:talha@123@cluster0.asd8i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(mongodbAtlas, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("mongodb atlas connected"));

app.use(userRoutes);
app.use(activityRoutes);

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  acitivityModel.find().then((data) => {
    const inProgressCount = data.filter((obj) => obj.status === "In-Progress")
      .length;
    const completedCount = data.filter((obj) => obj.status === "Completed")
      .length;

    //formula for calculating the achivementPercent
    const achivementPercent = Math.ceil((completedCount / data.length) * 100);
    res.render("home", {
      activityData: data,
      inProgressCount,
      completedCount,
      achivementPercent,
    });
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});
