const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
let mongoose = require('mongoose');
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true})
    .then(() => console.log("Mongoose ==> Connected"))
    .catch((err) => console.log(`Mongoose ERROR ==> ${err}`))

var Users = require('./routes/Users');

app.use("/users", Users);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});