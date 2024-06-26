const { Product } = require('../models');

const productData = [
  {
    product_name: 'No Sleeve Shirts',
    price: 12,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Sneakers',
    price: 100,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Hats',
    price: 15,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Jeans',
    price: 22,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Shorts',
    price: 10,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;