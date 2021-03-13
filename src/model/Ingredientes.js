let {Sequelize, DataTypes } = require('sequelize');
let db = require('../db');

const Ingredientes = db.define('Ingrediente',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);
module.exports = Ingredientes;