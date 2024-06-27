const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Order = require('./order');
const Product = require('./products');

const OrderDetail = sequelize.define('OrderDetail', {
    orderDetailID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    orderID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Order,
            key: 'orderID'
        }
    },
    productID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Product,
            key:'productID'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

//relasi orderDetail dan order
Order.hasMany(OrderDetail, { foreignKey: 'orderID' });
OrderDetail.belongsTo(Order, { foreignKey: 'orderID' });

//relasi orderDetail dan product
Product.hasMany(OrderDetail, { foreignKey: 'productID' });
OrderDetail.belongsTo(Product, { foreignKey: 'productID' });

module.exports = OrderDetail;
   