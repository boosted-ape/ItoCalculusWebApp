const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
const db = require("./app/models");
db.sequelize.sync({force: true}).then(() => {
    console.log("drop and sync DB");
});

var corsOptions = {
    origin: "https://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({message : "Welcome to PricingModels!"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});