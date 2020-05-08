/* 分类Schema */
module.exports = app => {
	const { mongoose } = app,
		{ Schema } = mongoose
	const CategorySchema = new Schema({
		name: {
			type: String,
			unique: true,
			required: true
		},
		createdAt: {
			type: Date,
			default: Date.now
		}
	})
	return mongoose.model('Category', CategorySchema)
}
