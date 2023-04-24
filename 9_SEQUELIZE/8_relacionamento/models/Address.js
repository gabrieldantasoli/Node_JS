const { DataTypes } = require("sequelize");

const db = require('../db/conn');

const User = require('./User');

const address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        required: true
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    }
});

address.belongsTo(User);

module.exports = address;