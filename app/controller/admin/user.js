'use strict';

const BasicController = require('../BasicController')

class LoginContainer extends BasicController {
	async login() {
		try {
			const { ctx } = this,
				{ User } = ctx.model,
				user = ctx.request.body
			console.log(ctx.request.body);
			const loginUser = await User.findOne(user)
			if(!!loginUser) {
				ctx.session.user = loginUser
				this.handleSuccess(loginUser)
			}
            this.handleError({ err_msg: '用户错误' })
		}catch (e) {
			this.handleError(e)
		}
	}
	async logout() {
		const { ctx } = this
		ctx.session.user = null
		this.handleSuccess({ err_msg: '退出成功' })
	}
}

module.exports = LoginContainer
