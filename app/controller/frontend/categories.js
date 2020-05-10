'use strict';

const BasicController = require('../BasicController');

class CategoryController extends BasicController {
	/* 处理 GET /categories 获取全部分类 */
	async index() {
		const { ctx } = this
		try {
			const { Category, Article } = ctx.model,
				categories = await Category.find({}),
				{ name } = ctx.request.query
			if(!!name) {
				const data = await Article.find({ category: { $in: [name] }})
				this.handleSuccess(data)
				return
			}
			const newCategoryList = []
			for (let category of categories) {
				const articleCount = await Article.countDocuments({ category: { $in: [category.name] }})
				newCategoryList.push({
					...category.toObject(),
					articleCount
				})
			}
			this.handleSuccess(newCategoryList)
		} catch (e) {
			this.handleError(e);
		}
	}
}

module.exports = CategoryController;


