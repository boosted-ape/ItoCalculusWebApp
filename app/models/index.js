const dbConfig = require("../config/db.config.js");
const mysql = require("mysql2/promise");

initialize();

async function initialize(){
    const {host, port, user, password, dbname} = {host: dbConfig.HOST, port: dbConfig.PORT, user: dbConfig.USER, dbname: dbConfig.DB};
    const connection = await mysql.createConnection({host, user, password});
    await connection.query(`CREATE DATABASE IF NOT EXISTS\`${dbname}\`;`);
}

const {Sequelize, Datatypes, Models, DataTypes} = require("sequelize")
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
db.sequelize = sequelize;

db.priceModels = require("./stockNames.js")(sequelize,Sequelize);
db.stockData = require("./stockData.js")(sequelize, Sequelize);

db.priceModels.hasMany(db.stockData);
db.stockData.belongsTo(db.priceModels);


module.exports = db;

