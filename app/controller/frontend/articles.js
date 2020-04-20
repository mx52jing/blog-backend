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
            })
        } catch (e) {
            this.handleError(e)
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
}

module.exports = ArticleController;

