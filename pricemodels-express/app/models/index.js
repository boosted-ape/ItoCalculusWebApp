const dbConfig = require("../config/db.config.js");
const mysql = require("mysql2/promise");

initialize();


async function initialize(){
    const connection = await mysql.createConnection({
        host: dbConfig.HOST,
        user: dbConfig.USER, 
        password: dbConfig.PASSWORD
    });
    //console.log(connection); //debug only

    await connection.query(`CREATE DATABASE IF NOT EXISTS\`${dbConfig.DB}\`;`);
}

const {Sequelize, Datatypes, Models, DataTypes} = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
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
db.sequelize = sequelize;

db.priceModels = require("./priceModels.js")(sequelize,Sequelize);
db.stockData = require("./stockData.js")(sequelize, Sequelize);
db.projectedStockData = require("./projectedStockData")(sequelize,Sequelize);

db.priceModels.hasMany(db.stockData);
db.priceModels.hasMany(db.projectedStockData);
db.stockData.belongsTo(db.priceModels);
db.projectedStockData.belongsTo(db.priceModels);


module.exports = db;

