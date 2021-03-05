module.exports = app => {
    const stockData = require("../controllers/stockData.controller");

    var router = require("express").Router();

    router.post("/", tutorials.create);

    app.use('/api/stockData', router);
};