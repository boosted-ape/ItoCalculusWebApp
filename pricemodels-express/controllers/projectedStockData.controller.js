const db = require("../app/models");


const ProjectedStockData = db.projectedStockData;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.date){
        res.status(400).send({
            message: "Content canot be empty!"
        });
        return
    }
    const projectedStockData = {
        date: req.body.date,
        open: req.body.open,
        close: req.body.close,
        high: req.body.high,
        low: req.body.low,
        volume: req.body.volume
    };

    ProjectedStockData.create(tutorial)
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
    ProjectedStockData.destroy({
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