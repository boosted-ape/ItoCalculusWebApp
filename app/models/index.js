const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.PASSWORD, dbConfig.USER, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operationsAliases: false,

    pool: {
        max: dbConfig.max,
        min: dbConfig.min,
        idle: dbConfig.idle,
        acquire: dbConfig.acquire
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = Sequelize;

db.priceModels = require("./priceModels.js")(Sequelize,sequelize);

module.exports = db;

