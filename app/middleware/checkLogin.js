module.exports = app => {
	return async (ctx, next) => {
		const authorization = ctx.header['authorization'],
			token = String(authorization.replace(/Bearer\s+/, ''))
		if(token !== 'null') {
        	try {
				const tokenData = app.jwt.verify(token, app.config.secret)
				console.log(tokenData);
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
