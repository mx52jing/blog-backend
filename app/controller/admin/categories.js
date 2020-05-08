'use strict';

const BasicController = require('../BasicController');

class CategoryController extends BasicController {
	/* 处理 GET /categories 获取全部分类 */
	async index() {
		try {
			await this.handleListWithPagination({
				modelName: 'Category',
				sortObj: { createdAt: -1 }
			});
		} catch (e) {
			this.handleError(e);
		}
	}
	/* 处理 POST /categories 增加分类*/
	async create() {
		const { ctx } = this;
		try {
			const { Category } = ctx.model,
				category = ctx.request.body,
				findCategory = await Category.findOne(category);
			if (!!findCategory) {
				return this.handleError('此分类已经存在');
			}
			await Category.create(category);
			this.handleSuccess('分类创建成功');
		} catch (e) {
			this.handleError(e);
		}
	}
	/* 处理 PUT /categories/:id 更新分类 */
	async update() {
		await this.handleUpdate('Category')
	}
	/* 处理 DELETE /categories/:id 删除分类*/
	async destroy() {
		await this.handleDestory('Category')
	}
}

module.exports = CategoryController;


