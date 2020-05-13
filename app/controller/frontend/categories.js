'use strict';

const BasicController = require('../BasicController');

class CategoryController extends BasicController {
    /* 处理 GET /categories 获取全部分类 */
    async index() {
        const { ctx } = this
        try {
            const { Category, Article } = ctx.model,
                { name, page = 1, pageSize = 10 } = ctx.request.query,
                pageNum = isNaN(page) ? 1 : parseInt(page),
                pagesize = isNaN(page) ? 10 : parseInt(pageSize)
            if(!!name) {
                const query = { category: { $in: [name] }, isPublished: true },
                    data = await Article.find(query)
                        .skip((pageNum - 1) * pagesize).limit(pagesize),
                    total = await Article.countDocuments(query)
                this.handleSuccess({
                    page: pageNum,
                    pageSize: pagesize,
                    data,
                    total,
                    pageCount: Math.ceil(total / pagesize)
                })
                return
            }
            const categories = await Category.find({}),
                newCategoryList = []
            for(let category of categories) {
                const articleCount = await Article.countDocuments({ category: { $in: [category.name] }, isPublished: true })
                newCategoryList.push({
                    ...category.toObject(),
                    articleCount
                })
            }
            this.handleSuccess(newCategoryList)
        }catch(e) {
            this.handleError(e);
        }
    }
}

module.exports = CategoryController;


