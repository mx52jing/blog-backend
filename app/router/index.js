'use strict';

const frontendRouter = require('./frontend')
const adminRouter = require('./admin')

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	frontendRouter(app)
	adminRouter(app)
};
