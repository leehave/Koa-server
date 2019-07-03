/*
 * @Author: lizhixiang.have@gmail.com
 * @Date: 2019-07-03 21:34:07
 * @LastEditors: lizhixiang.have@gmail.com
 * @LastEditTime: 2019-07-03 21:36:09
 */
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('email', {
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		content: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
			// 如果为 true 则表的名称和 model 相同，即 user
			// 为 false MySQL创建的表名称会是复数 users
			// 如果指定的表名称本就是复数形式则不变
			freezeTableName: true
		})
}