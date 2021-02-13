const db = require("../app/models");


const StockData = db.stockData;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.date){
        res.status(400).send({
            message: "Content canot be empty!"
        });
        return
    }

    //make api call, save and save object json
    //then enumerate all child objects
    //data = forEach(function){
    /*  for(var key in data.["Time Series (5min)"]){
            key = value;
            key.date = key;
    }    
    */
    const stockData = {
        date: req.body.date,
        open: req.body.open,
        close: req.body.close,
        high: req.body.high,
        low: req.body.low,
        volume: req.body.volume
    };

    StockData.create(stockData)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Data!"
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
        res.send({message: `${nums} StockData was deleted sucessfully!`});
    })
    .catch(err => {
        res.status(500).send({
            message: "Some error occured"
        });
    });
};

exports.update = (req, res) => {

};
