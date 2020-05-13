/* 文章 Schema */
module.exports = app => {
    const { mongoose } = app,
        { Schema } = mongoose
    const ArticleSchema = new Schema({
        title: { // 标题
            type: String,
            unique: true,
            required: true
        },
        category: { // 分类
            type: Array
        },
        introduction: { // 简介
            type: String
        },
        content: { // 内容
            type: String,
            required: true
        },
        /* 访问量 */
        pv: {
            type: Number,
            default: 0
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        },
        isPublished: {
            type: Boolean,
            default: true
        }
    })
    return mongoose.model('Article', ArticleSchema)
}
