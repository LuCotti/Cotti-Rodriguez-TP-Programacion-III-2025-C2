import Producto from './producto.js';
import Venta from './venta.js';
import ProductoVenta from './producto-venta.js';

Producto.belongsToMany(Venta, {
  through: ProductoVenta,
  foreignKey: 'productoId',
});
Venta.belongsToMany(Producto, {
  through: ProductoVenta,
  foreignKey: 'ventaId',
});

export { Producto, Venta };
