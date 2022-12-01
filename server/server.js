const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
require("./DB");
const path = require("path");
const app = express();
const port = 5050;

// const passport = require('passport')
// const passportMiddleware = require('./config/passport')(passport)
const productRouter = require("./routes/product-router");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(passport.initialize())

app.use("/Product", productRouter);
// app.get('/movies',passport.authenticate('jwt'),moviesRouter)
app.get("/", (req, res) => {
  res.send({ message: "success" });
});

app.listen(port, () => {
  console.log(`server listening on port:${port}`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}
