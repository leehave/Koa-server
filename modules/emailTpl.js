/*
 * @Author: lizhixiang.have@gmail.com
 * @Date: 2019-07-03 21:32:49
 * @LastEditors: lizhixiang.have@gmail.com
 * @LastEditTime: 2019-07-03 21:47:28
 */

const db = require('../config/db');
const Sequelize = db.sequelize;
const Email = Sequelize.import('../schema/email.js');

class EmailModel {
	static async create(content) {
		let { name, content } = content;
		await User.create({
			name,
			content
		})
		return true
	}
}