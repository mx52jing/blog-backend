/* 用户 Schema */
module.exports = app => {
	const { mongoose } = app,
		{ Schema } = mongoose
	const UserSchema = new Schema({
		username: {
			type: String,
			unique: true
		},
		password: {
			type: String
		}
	})
	return mongoose.model('User', UserSchema)
}
