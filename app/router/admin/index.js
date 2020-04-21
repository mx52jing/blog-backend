'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app,
		checkLogin = app.middleware.checkLogin(app)
	/* 登录/退出 */
	router.post('/admin/login', controller.admin.user.login)
	router.post('/admin/logout', controller.admin.user.logout)
	/* 文章 */
	router.resources('articles', '/admin/articles', checkLogin, controller.admin.articles);
	/* 分类 */
	router.resources('categories', '/admin/categories', checkLogin, controller.admin.categories);
};
