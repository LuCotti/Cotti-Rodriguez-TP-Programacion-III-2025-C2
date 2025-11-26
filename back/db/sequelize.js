const path = require('path');
const { Sequelize } = require("sequelize");
const stringDb = process.env.STRING_DB;
// const sequelize = new Sequelize(stringDb);
const sequelize = new Sequelize(stringDb);
sequelize.sync();

module.exports = sequelize;