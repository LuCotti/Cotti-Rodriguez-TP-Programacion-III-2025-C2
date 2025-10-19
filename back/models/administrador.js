const sequelize = require("../db/sequelize");
const { DataTypes } = require("sequelize");

const Administrador = sequelize.define("Administrador",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mail: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    clave: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    tableName: "administradores",
    timestamps: true,
    createdAt: true,
    updatedAt: true
  }
);

module.exports = Administrador;