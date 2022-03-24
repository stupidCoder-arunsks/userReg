const Sequelize = require('sequelize');

const sequelize = new Sequelize('user-reg' ,'root','8148869556@MySql',
{dialect:'mysql',host:'localhost'});

module.exports = sequelize;