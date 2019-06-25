/*
 * @Author: lizhixiang.have@gmail.com
 * @Date: 2019-06-25 23:18:42
 * @LastEditors: lizhixiang.have@gmail.com
 * @LastEditTime: 2019-06-25 23:24:15
 */

const db = require('../config/db')
const Sequelize = db.sequelize
const Todo = Sequelize.import('../schema/todo.js')

class TodoModel {
	/**
	 * 创建一条TODO
	 * @param data
	 * @returns {Promise<boolean>}
	 */
	static async createTodo(data){
		await Todo.create({
			'user_id': data.user_id,
			'content': data.content,
			'status': data.status
		})
		return true
	}
}

module.exports = TodoModel