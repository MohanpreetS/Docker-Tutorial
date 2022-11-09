const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();
colors.enable();

const Anim = require("./database/anim.model");
const connect = require("./database/connect");


app.listen(8000, () => {
  console.log("server listening on port 8000");

  // connect to the database
  connect();
});
