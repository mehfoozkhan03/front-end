const express = require("express");

require("dotenv").config({
  path: ".env.production",
});

const {Connection}  = require("./Config/Config")

const app = express();

app.listen(process.env.PORT, async () => {
  try {
    await Connection;
    console.log("DB Connected ✔👀")
  } catch (error) {
    console.log("error", error);
  } finally {
    console.log("Done");
  }
});
