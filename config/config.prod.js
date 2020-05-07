module.exports = appInfo => {
	const config = {}
	/* jwt */
	const {
		SECRET,
		DATEBASE_USER, // 数据库用户名
		DATEBASE_PWD, // 密码
		DATEBASE_NAME, // 数据库名称
		LISTEN_HOSTNAME
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
			port: 3002,
            hostname: LISTEN_HOSTNAME
		}
	}
	config.jwt = {
		secret: `${appInfo.name}${SECRET}`
	}
	return config
}
