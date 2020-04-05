'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
	/* 处理 GET /articles */
	async index() {
		console.log(1111);
		const { ctx } = this
		ctx.body = {
			err_no: 0,
			data: {
				name: '张三frontend'
			}
		}
	}
	/* 处理 GET /articles/:id */
	async show() {

	}
}

module.exports = ArticleController

