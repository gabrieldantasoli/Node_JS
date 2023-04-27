const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('mvcdata','root','201000267165', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log("Conectado ao banco mvcdata !");
} catch(error) {
    console.log("Não foi possível conectar ao banco de dados: mvcdata !");
};

exports.default = sequelize;