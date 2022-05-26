const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE, // Nombre de la BD
    process.env.USER, // Usuario
    process.env.PASSWORD, //contraseña
    {
        host: '34.221.160.76', // host 
        dialect: 'mysql' // gestor de bases de datos
    });

module.exports = sequelize;