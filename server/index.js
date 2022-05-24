const express = require("express");
const cors = require("cors");

const app = express();

const controllerFile = require("./controller");
const controller = require("./controller");

app.use(express.json());
app.use(cors());

app.listen(4004, () => console.log('rnning on 4004'))