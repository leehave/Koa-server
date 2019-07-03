/*
 * @Author: lizhixiang.have@gmail.com
 * @Date: 2019-06-25 22:48:58
 * @LastEditors: lizhixiang.have@gmail.com
 * @LastEditTime: 2019-07-03 22:02:54
 */
const moment = require('moment');
 module.exports = function(sequelize,DataTypes){
	return sequelize.define('todo', {
		// todo ID
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		//用户ID
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		content: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			get() {
				return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
			}
		},
		updated_at: {
			type: DataTypes.DATE,
			get() {
				return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
			}
		},
		deleted_at:{
			type: DataTypes.DATE,
			get() {
				return moment(this.getDataValue('deleted_at')).format('YYYY-MM-DD HH:mm:ss');
			}
		}
	}, {
			// 如果为 true 则表的名称和 model 相同，即 user
			// 为 false MySQL创建的表名称会是复数 users
			// 如果指定的表名称本就是复数形式则不变
			freezeTableName: true,
			timestamps: false,  //去除createAt updateAt
			createdAt: 'created_at',//映射
			updatedAt: 'updated_at',//映射
			deletedAt: false, //'deleted_at',
			//删除数据时不删除数据，而是更新deleteAt字段 如果需要设置为true，则上面的deleteAt字段不能为false，也就是说必须启用
			paranoid: false
		})
}