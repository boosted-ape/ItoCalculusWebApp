const db = require("../models");


const StockData = db.stockData;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body["Meta Data"]) {
        return res.status(400).send({
            message: "Content canot be empty!"
        });

    }

    var value;
    //then enumerate all child objects
    for (var key in req.body["Time Series (Daily)"]) {
        value = req.body["Time Series (Daily)"][key];
        value.time = key;

    }

    StockData.create(value)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occurred while creating data!"
            });
        });


};

exports.findAll = (req, res) => {
    const date = req.query.date
};

exports.findOne = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {
    StockData.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} StockData was deleted sucessfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error occured"
            });
        });
};

exports.update = (req, res) => {

};
