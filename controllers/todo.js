/*
 * @Author: lizhixiang.have@gmail.com
 * @Date: 2019-07-16 22:47:14
 * @LastEditors: lizhixiang.have@gmail.com
 * @LastEditTime: 2019-07-16 22:48:31
 */
const todoModel = require('../modules/todo');
const statusCode = require('../util/status-code')

class TodoController {
	/**
	 * @parma ctx
	 * @description 创建一条todo
	 */
	static async create(ctx) {
		const todo = ctx.request.body;
		if(todo.user_id && todo.content){
			await todoModel.createTodo(todo)
			ctx.response.status = 200;
				ctx.body = statusCode.ERROR_200('创建成功')
		}else{
			ctx.response.status = 412;
			ctx.body = statusCode.ERROR_412('创建失败')
		}
	}

	/****
	 * @name 查询全部todo列表 */
	static async getTodoList(ctx){
		const todoList = await todoModel.findAllTodoList()
		ctx.response.status = 200
		ctx.body = statusCode.ERROR_200('查询成功',todoList)
	}

	/***
	 * @name 修改一条
	 */
	static async updateTodo(ctx){
		const updataList = ctx.request.body
		if(updataList.user_id && updataList.content){
			await todoModel.updateTodo(updataList)
			ctx.response.status = 200;
				ctx.body = statusCode.ERROR_200('创建成功',updataList)
		}else{
			ctx.response.status = 412;
			ctx.body = statusCode.ERROR_412('创建失败')
		}
	}

	/**
	 * @name 删除提条数据
	 */
	static async delete(ctx){
		const id = ctx.params.id;
		if(id && !Number.isNaN(id)){
			await todoModel.delete(id);
			ctx.response.status = 200;
			ctx.body = statusCode.SUCCESS_200('删除成功')
		}else{
			ctx.response.status = 412;
			ctx.body = statusCode.ERROR_412('todoID必须传')
		}
	}
}