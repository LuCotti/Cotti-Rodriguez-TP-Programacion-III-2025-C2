import sequelize from '../db/sequelize.js';
import { DataTypes } from 'sequelize';
import Producto from './producto.js';
import Venta from './venta.js';

const ProductoVenta = sequelize.define(
  'ProductoVenta',
  {
    productoId: {
      type: DataTypes.INTEGER,
      references: {
        model: Producto,
        key: 'id'
      }
    },
    ventaId: {
      type: DataTypes.INTEGER,
      references: {
        model: Venta,
        key: 'id'
      }
    }
  },
  {
    tableName: 'producto_venta'
  }
);

export default ProductoVenta;