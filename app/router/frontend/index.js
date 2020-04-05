'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	/* 文章 */
	router.resources('articles', '/frontend/articles', controller.frontend.articles);
};
