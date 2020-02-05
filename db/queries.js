const db = require('./connection');

const getAllVillains = () => {
  return db
    .query('SELECT * FROM villains;')
    .then(data => {
      return data.rows;
    });
};

module.exports = {
  getAllVillains
};
