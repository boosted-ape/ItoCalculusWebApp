module.exports = (sequelize, Sequelize) => {
    const projectedStockData = sequelize.define("projectedStockData",{
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

    return projectedStockData;
};