const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ticketRouter = require("./routers/ticket");
const cors = require("cors");

const url =
  "mongodb+srv://me:12345db@test.j8ddw.mongodb.net/test?retryWrites=true&w=majority";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/ticket", ticketRouter);

app.get("/", (req, res) => {
  res.send("main");
});

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => app.listen(3005))
  .catch((err) => console.log(err));
