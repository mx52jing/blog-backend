/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1585710405580_9382';

	// add your middleware config here
	config.middleware = [];
	config.mongoose = {
		client: {
			url: 'mongodb://127.0.0.1/myBlog',
			options: {
				useUnifiedTopology: true,
				useCreateIndex: true,
				useNewUrlParser: true,
				useFindAndModify: false
			}
		}
	};
	/* 关闭安全校验 */
	config.security = {
		csrf: false,
		domainWhiteList: ['http://localhost:3000', 'http://localhost:3001']
	}
	/* 设置允许跨域 */
	config.cors = {
		/*
		* withCredentials 为true的时候。不能讲把orign设置为*
		* 我们有前台和admin两个项目都要请求这个后台接口，要配置允许多个域名访问
		* 所以需要删除origin，cors插件会设置请求的域名为跨域域名
		*/
		// origin: '*',
		credentials: true,
		allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
	}
	/* 设置启动端口 */
	config.cluster = {
		listen: {
			path: '',
			port: 3002,
			hostname: ''
		}
	}
	/* jwt */
	config.jwt = {
		secret: `${appInfo.name}*M*(%$>4L^@NG_S5=34*$JKSGFS9`
	}
	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	return {
		...config,
		...userConfig,
	};
};
