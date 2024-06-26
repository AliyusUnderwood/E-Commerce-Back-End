const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'blue jeans',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'black jeans',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;