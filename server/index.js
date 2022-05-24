const express = require("express");
const cors = require("cors");

const app = express();

const controllerFile = require("./controller");
const controller = require("./controller");

app.use(express.json());
app.use(cors());

app.get('/api/houses', controllerFile.getHouses); 
app.post('/api/houses', controllerFile.createHouses); 
app.put('/api/houses/:id', controllerFile.updateHouses); 
app.delete('/api/houses/:id', controllerFile.deleteHouses); 

app.listen(4003, () => console.log('running on 4003'))

