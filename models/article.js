const mongoose = require('mongoose')

const Schema = mongoose.Schema
const articleSchema = new Schema({
    title: String,
    authors: [String],
    publication_date: Date,
    contents: String,
    tags: [String],
    comments: [
        {
            name: String,
            message: String,
            rating: Number
        }
    ]
})

const articleModel = mongoose.model('article', articleSchema)

module.exports = articleModel