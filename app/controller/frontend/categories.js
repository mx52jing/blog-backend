'use strict';

const BasicController = require('../BasicController');

class CategoryController extends BasicController {
	/* 处理 GET /categories 获取全部分类 */
	async index() {
		const { ctx } = this
		try {
			const { Category } = ctx.model,
				categories = await Category.find({})
			this.handleSuccess(categories)
		} catch (e) {
			this.handleError(e);
		}
	}
}

module.exports = CategoryController;


