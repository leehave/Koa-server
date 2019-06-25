/*!
 * @author director <1831553725@qq.com>
 * date 05/30/2019
 * user表建模 
 */
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
			// 如果为 true 则表的名称和 model 相同，即 user
			// 为 false MySQL创建的表名称会是复数 users
			// 如果指定的表名称本就是复数形式则不变
			freezeTableName: true
		})
}
