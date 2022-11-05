const express = require("express");

app.listen(8000, () => {
  console.log("server listening on port 8000");

  // connect to the database
  connect();
});
