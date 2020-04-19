/* 用户 Schema */
const { hashSync } = require('bcrypt')

module.exports = app => {
	const { mongoose } = app,
		{ Schema } = mongoose
	const UserSchema = new Schema({
		username: {
			type: String,
			unique: true
		},
		password: {
			type: String,
			set(val) {
				return hashSync(val, 10)
			}
		}
	})
	return mongoose.model('User', UserSchema)
}
