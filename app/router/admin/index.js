'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app,
		checkLogin = app.middleware.checkLogin(app)
	/* 登录/退出 */
	router.post('/api/admin/login', controller.admin.user.login)
	router.post('/api/admin/logout', controller.admin.user.logout)
	/* 文章 */
	router.resources('articles', '/api/admin/articles', checkLogin, controller.admin.articles);
	/* 分类 */
	router.resources('categories', '/api/admin/categories', checkLogin, controller.admin.categories);
};
