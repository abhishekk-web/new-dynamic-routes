const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define("product", {

  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    notNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    autoNull: false
  },
  title: {
    type: Sequelize.STRING,
    autoNull: false    
  },
  description: {
    type: Sequelize.STRING,
    autoNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    autoNull: false
  }

})

module.exports = Product;