'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	/* 文章 */
	router.resources('articles', '/api/frontend/articles', controller.frontend.articles);
    /* 文章归档 */
    router.get('/api/frontend/archives', controller.frontend.articles.archives)
    /* 分类 */
    router.resources('categories', '/api/frontend/categories', controller.frontend.categories);
    /* pv */
	router.post('/api/frontend/articles/pv/:id', controller.frontend.articles.addPv)
};
