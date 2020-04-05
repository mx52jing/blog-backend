/* 分类Schema */
module.exports = app => {
	const { mongoose } = app,
		{ Schema } = mongoose
	const CategorySchema = new Schema({
		name: {
			type: String,
			unique: true,
			required: true
		}
	})
	return mongoose.model('Category', CategorySchema)
}
