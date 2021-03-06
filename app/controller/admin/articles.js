'use strict';

const BasicController = require('../BasicController');

class ArticleController extends BasicController {
	/* 处理 GET /articles 获取全部文章 */
	async index() {
		try {
			await this.handleListWithPagination({
				modelName: 'Article',
				keywordKeys: [ 'title' ],
				sortObj: { createdAt: -1 }
			});
		} catch (e) {
			this.handleError(e);
		}
	}
	/* 处理 POST  /articles 创建文章*/
	async create() {
		const { ctx } = this;
		try {
			const artile = ctx.request.body,
				msg = artile.isPublished ? '文章发表成功' : '成功保存至草稿',
				{ Article } = ctx.model;
			await Article.create(artile)
			this.handleSuccess(msg);
		} catch (e) {
			this.handleError(e);
		}
	}

	/* 处理 GET /articles/:id */
	async show() {
		const { ctx } = this
		try {
			const { id } = ctx.params,
				{ Article } = ctx.model,
				article = await Article.findById(id)
			this.handleSuccess(article)
		}catch (e) {
			this.handleError(e)
		}
	}
	/* 处理 PUT /articles/:id */
	async update() {
		await this.handleUpdate('Article')
	}
	/* 处理 DELETE /articles/:id */
	async destroy() {
		await this.handleDestory('Article')
	}
}

module.exports = ArticleController;

