// API key is W5GVI7U0ZGG13BFL. at alphavantage

module.exports = (sequelize, Sequelize) => {
    const priceModels = sequelize.define("stockNames",{
        stockname: {
            type: Sequelize.STRING
        }
    });

    return priceModels;
};