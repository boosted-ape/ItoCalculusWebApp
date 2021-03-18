module.exports = app => {
    const stockData = require("../controllers/stockData.controller");

    var router = require("express").Router();

    router.post("/", stockData.create);

    router.get("/", stockData.findAll);

    router.delete("/", stockData.deleteAll);

    app.use('/api/stockData', router);
};