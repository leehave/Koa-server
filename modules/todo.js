/*
 * @Author: lizhixiang.have@gmail.com
 * @Date: 2019-06-25 23:18:42
 * @LastEditors: lizhixiang.have@gmail.com
 * @LastEditTime: 2019-07-03 22:20:22
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
			'status': data.status,
		})
		return true
	}

	/**
	 * 删除一条todo
	 * @param id id
	 * @returns {Promise.<boolean>}
	 */
	static async delete(id) {
		await Todo.destroy({
			where: {
				id,
			}
		})
		return true
	}

	/**
	 * 查询todo列表
	 * @returns {Promise<*>}
	 */
	static async findAllTodoList() {
		return await Todo.findAll({
			attributes: ['id', 'name']
		})
	}

	/**
     * 更新一条todo数据
     * @param id  listId
     * @param data  
     * @returns {Promise.<boolean>}
     */
	static async updateTodo(id, data) {
		await Todo.update({
			'user_id': data.user_id,
			'content': data.content,
			'status': data.status
		}, {
				where: {
					id
				},
				fields: ['user_id','content', 'status']
			});
		return true
	}
}

module.exports = TodoModel