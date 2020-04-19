'use strict';

const { compare } = require('bcrypt')
const BasicController = require('../BasicController')

class LoginContainer extends BasicController {
	async login() {
		try {
			const { ctx, app } = this,
				{ User } = ctx.model,
				user = ctx.request.body,
				{ username, password } = user
			const findedUser = await User.findOne({ username })
			if (!findedUser) {
				return this.handleError({ err_msg: '用户不存在' })
			}
			/* 验证密码 */
			const isValidPwd = await compare(password, findedUser.password)
			if (!isValidPwd) {
				return this.handleError({ err_msg: '用户名或密码错误 ' })
			}
			/* 生成token 返回给客户端 */
			const token = app.jwt.sign(
				{ id: String(findedUser._id) },
				app.config.secret
			)
			this.handleSuccess({
				token
			})
		} catch (e) {
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
