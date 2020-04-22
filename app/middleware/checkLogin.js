module.exports = app => {
	return async (ctx, next) => {
		const authorization = ctx.header['authorization'],
			token = String(!!authorization ? authorization.replace(/Bearer\s+/, '') : 'null')
		if(token !== 'null') {
        	try {
				const tokenData = app.jwt.verify(token, app.config.secret)
				await next()
			}catch (e) {
				ctx.body = {
					err_no: 401,
					err_msg: 'token无效'
				}
			}
		}else {
			ctx.body = {
				err_no: 401,
				err_msg: '请先登录'
			}
		}
	}
}
