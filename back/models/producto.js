const sequelize = require("../db/sequelize");
const { DataTypes } = require("sequelize");

const Producto = sequelize.define("Producto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imagen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    categoria: {
      type: DataTypes.ENUM("Lampara", "Plafon"),
      allowNull: false
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  },
  {
    tableName: "productos",
    timestamps: true,
    createdAt: true,
    updatedAt: true
  }
);

module.exports = Producto;  