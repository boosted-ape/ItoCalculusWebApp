module.exports = (sequelize, Sequelize) => {
    const projectedStockData = sequelize.define("projectedStockData",{
        time: {
            type: Sequelize.DATE
        },
        open: {
            type: Sequelize.FLOAT
        },
        close: {
            type: Sequelize.FLOAT
        },
        high: {
            type: Sequelize.FLOAT
        },
        low: {
            type:Sequelize.FLOAT
        },
        volume: {
            type: Sequelize.INTEGER
        }
    });

    return projectedStockData;
};