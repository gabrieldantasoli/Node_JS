const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize', 'root', '201000267165', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log("Conectado ao Sequelize !");
} catch (err) {
  console.log("Não foi possível conectar : ", err);
}

module.exports = sequelize;
