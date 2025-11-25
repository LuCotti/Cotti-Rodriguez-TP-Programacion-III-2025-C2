const path = require('path');
const { Sequelize } = require("sequelize");
const stringDb = process.env.STRING_DB;
// const sequelize = new Sequelize(stringDb);
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite'),
});
sequelize.sync();

module.exports = sequelize;