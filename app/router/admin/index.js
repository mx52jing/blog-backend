'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	/* 登录/退出 */
	router.post('/admin/login', controller.admin.user.login)
	router.post('/admin/logout', controller.admin.user.logout)
	/* 文章 */
	router.resources('articles', '/admin/articles', controller.admin.articles);
	router.post('/admin/articles/pv/:id', controller.admin.articles.addPv)
	/* 分类 */
	router.resources('categories', '/admin/categories', controller.admin.categories);
};
