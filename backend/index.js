const express = require("express");
const cors = require("cors");
const { router } = require("./routes");
require("dotenv").config();
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`server ${process.env.PORT}`);
});
