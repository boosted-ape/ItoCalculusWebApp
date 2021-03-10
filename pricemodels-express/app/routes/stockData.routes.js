module.exports = app => {
    const stockData = require("../controllers/stockData.controller");

    var router = require("express").Router();

    router.post("/", stockData.create);

    app.use('/api/stockData', router);
};