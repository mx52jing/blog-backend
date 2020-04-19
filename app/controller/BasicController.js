'use strict';
const Controller = require('egg').Controller;

class BasicController extends Controller {
	get user() {
		return this.ctx.session.user
	}
	/* 处理带有分页的列表请求 */
	async handleListWithPagination({ modelName, keywordKeys = [] }) {
		try {
			const { ctx } = this,
				{ page = 1, pageSize = 10, keyword } = ctx.query,
				pageNum = isNaN(page) ? 1 : parseInt(page),
				pagesize = isNaN(page) ? 10 : parseInt(pageSize);
			let query = {};
			if (!!keyword && !!keywordKeys.length) {
				query['$or'] = keywordKeys.map(item => ({ [ item ]: new RegExp(keyword) }));
			}
			const Model = ctx.model[modelName],
				total = await Model.countDocuments(query),
				data = await Model.find(query)
				.skip((pageNum - 1) * pagesize)
				.limit(pagesize);
			this.handleSuccess({
				page: pageNum,
				pageSize: pagesize,
				data,
				total,
				pageCount: Math.ceil(total/pagesize)
			})
		} catch (e) {
            this.handleError(e)
		}
	}

	async handleSuccess(data) {
		this.ctx.body = {
			err_no: 0,
			result: data
		};
	}

	async handleError(error) {
		const err_msg = error && error.err_msg;
		this.ctx.body = {
			err_no: 1,
			err_msg,
			result: error
		};
	}
	/* 处理更新 update */
	async handleUpdate(modelName) {
		const { ctx } = this
		try {
			const data = ctx.request.body,
				id = ctx.params.id
			await ctx.model[modelName].findByIdAndUpdate(id, data)
			this.handleSuccess('更新成功')
		}catch (e) {
			this.handleError(e)
		}
	}
	/* 处理删除destory */
	async handleDestory(modelName) {
		const { ctx } = this
		try {
			const id = ctx.params.id
			await ctx.model[modelName].findByIdAndRemove(id)
			this.handleSuccess('删除成功')
		}catch (e) {
			this.handleError(e)
		}
	}
}

module.exports = BasicController;
