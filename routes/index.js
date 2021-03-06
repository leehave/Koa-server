/*
 * @Author: lizhixiang.have@gmail.com
 * @Date: 2019-06-23 22:06:18
 * @LastEditors: lizhixiang.have@gmail.com
 * @LastEditTime: 2019-07-21 17:29:18
 */

const Router = require('koa-router');
const UserController = require('../controllers/user');
const TodoController = require('../controllers/todo');
const router = new Router({
    prefix: '/api/v1'
})

/**
 * 用户接口
 */
// 用户注册
router.post('/user/register', UserController.create);
// 用户登录
router.post('/user/login', UserController.login);
// 删除用户
router.delete('/user/delete/:id', UserController.delete);
// 获取用户信息
router.get('/user/info', UserController.getUserInfo);
// 获取用户列表
router.get('/user/list', UserController.getUserList);

// todo create
router.post('/todo/create',TodoController.create);
// todo getAllList
router.get('/todo/list',TodoController.getTodoList);
// todo updat
router.patch('/todo/updata/:id',TodoController.updateTodo);
// todo delete
router.delete('/todo/delete/:id',TodoController.delete)
module.exports = router
