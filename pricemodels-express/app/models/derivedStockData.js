module.exports = (sequelize, Sequelize) => {
    const projectedStockData = sequelize.define("derivedStockData",{
        id:{
            type: Sequelize.INTEGER,
            unique: true,
            primaryKey: true,
        },
        time: {
            type: Sequelize.DATE
        },
        average: {
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