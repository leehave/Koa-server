const Sequelize = require('sequelize');
const sequelize = new Sequelize('tianshe', 'root', '123456', {
	host: 'localhost',
	dialect: 'mysql',
	operatorsAliases: false,
	dialectOptions: {
			charset: "utf8",
		collate: "utf8_general_ci",
			supportBigNumbers: true,
			bigNumberStrings: true
	},

	pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
	},
	timezone: '+08:00' //东八时区
});

module.exports = {
	sequelize
}
