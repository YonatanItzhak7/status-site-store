const mongoose = require("mongoose");

const STRING_CONNECTION = process.env.CONNECTION_STRING;

mongoose
  .connect(STRING_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection success"))
  .catch((err) => {
    console.log("connection false", err.message);
  });

module.exports = mongoose.connection;
