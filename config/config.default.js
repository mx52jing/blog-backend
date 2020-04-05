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
		csrf: false
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
