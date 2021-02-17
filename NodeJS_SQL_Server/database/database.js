const Sequelize = require('sequelize')
const {config} = require('../common/CommonData')

const sequelize = new Sequelize(
    config.DB_NAME,
    config.USER_NAME,
    config.PASSWORD,
    {        
        dialect: 'mssql',
        host: 'localhost',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000,            
        }
    }
);

const Op = Sequelize.Op

module.exports = {
    sequelize,
    Op
}