'use strict';

const BasicController = require('../BasicController');

class ArticleController extends BasicController {
	/* 处理 GET /articles 获取全部文章 */
	async index() {
		try {
			await this.handleListWithPagination({ modelName: 'Article', keywordKeys: [ 'title' ] });
		} catch (e) {
			this.handleError(e);
		}
	}
	/* 处理 POST  /articles 创建文章*/
	async create() {
		const { ctx } = this;
		try {
			const artile = ctx.request.body,
				{ Article } = ctx.model;
			await Article.create(artile);
			this.handleSuccess('文章发表成功');
		} catch (e) {
			this.handleError(e);
		}
	}

	/* 处理 GET /articles/:id */
	async show() {
		const { ctx } = this
		try {
			const id = ctx.params.id,
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
		console.log('delete');
		await this.handleDestory('Article')
	}
	/* 增加pv */
	async addPv() {
		const { ctx } = this
		try {
			const id = ctx.params.id,
				{ Article } = ctx.model
			await Article.findByIdAndUpdate(id, { $inc: { pv: 1 }})
			this.handleSuccess('pv增加成功')
		}catch (e) {
			this.handleError(e)
		}
	}
}

module.exports = ArticleController;

