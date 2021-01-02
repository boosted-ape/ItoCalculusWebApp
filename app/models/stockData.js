module.exports = (sequelize, Sequelize) => {
    const stockData = sequelize.define("stockData",{
        time: {
            type: Sequelize.DATE
        },
        open: {
            type: Sequelize.INTEGER
        },
        close: {
            type: Sequelize.INTEGER
        },
        high: {
            type: Sequelize.INTEGER
        },
        low: {
            type:Sequelize.INTEGER
        },
        volume: {
            type: Sequelize.INTEGER
        }
    });

    return stockData;
};