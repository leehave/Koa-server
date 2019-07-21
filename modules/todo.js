/*
 * @Author: lizhixiang.have@gmail.com
 * @Date: 2019-06-25 23:18:42
 * @LastEditors: lizhixiang.have@gmail.com
 * @LastEditTime: 2019-07-21 17:43:38
 */

const db = require('../config/db');
const Sequelize = db.sequelize;
const Todo = Sequelize.import('../schema/todo.js');
Todo.sync({ force: false });

class TodoModel {
	/**
	 * 创建一条TODO
	 * @param data
	 * @returns {Promise<boolean>}
	 */
	static async createTodo(data){
		let { user_id, content,status } = data;
		await Todo.create({
			'user_id': user_id,
			'content': content,
			'status': status,
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
			attributes: ['id', 'content','status']
		})
	}

	/**
     * 更新一条todo数据
     * @param id  listId
     * @param data  
     * @returns {Promise.<boolean>}
     */
	static async updateTodo(id, status, user_id) {
		await Todo.update({
			status
		}, {
				where: {
					id,
					user_id
				},
				fields: ['status']
			});
		return true
	}

	static async findTodoByName(content) {
		return await Todo.findOne({
			where: {
				content
			}
		})
	}
}

module.exports = TodoModel
