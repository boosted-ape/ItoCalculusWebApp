module.exports = (sequelize, Sequelize) => {
    const stockData = sequelize.define("stockData",{
        id:{
            type: Sequelize.INTEGER,
            unique: true,
            primaryKey: true,
        },
        time: {
            type: Sequelize.DATE
        },
        "1. open": {
            type: Sequelize.FLOAT
        },
        "2. high": {
            type: Sequelize.FLOAT
        },
        "3. low": {
            type: Sequelize.FLOAT
        },
        "4. close": {
            type:Sequelize.FLOAT
        },
        "5. volume": {
            type: Sequelize.INTEGER
        }
    });

    return stockData;
};