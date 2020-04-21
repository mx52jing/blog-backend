'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	/* 文章 */
	router.resources('articles', '/frontend/articles', controller.frontend.articles);
    /* 分类 */
    router.resources('categories', '/frontend/categories', controller.frontend.categories);
    /* pv */
	router.post('/frontend/articles/pv/:id', controller.frontend.articles.addPv)
};
