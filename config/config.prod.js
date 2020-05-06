module.exports = appInfo => {
	const config = {}
	/* jwt */
	const {
		SECRET,
		DATEBASE_USER, // 数据库用户名
		DATEBASE_PWD, // 密码
		DATEBASE_NAME // 数据库名称
	} = process.env
	config.mongoose = {
		client: {
			url: `mongodb://${DATEBASE_USER}:${DATEBASE_PWD}@db:27017/${DATEBASE_NAME}`,
			options: {
				useUnifiedTopology: true,
				useCreateIndex: true,
				useNewUrlParser: true,
				useFindAndModify: false
			}
		}
	}
	config.cluster = {
		listen: {
			port: 3003
		}
	}
	config.jwt = {
		secret: `${appInfo.name}${SECRET}`
	}
	return config
}
