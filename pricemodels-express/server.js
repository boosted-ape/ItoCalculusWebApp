const express = require("express");
const cors = require("cors");


const app = express();
const db = require("./app/models");
db.sequelize.sync({force: true}).then(() => {
    console.log("drop and sync DB");
});

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({message : "Welcome to PricingModels!"});
});

const PORT = process.env.PORT || 8080;

require("./app/routes/stockData.routes")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});