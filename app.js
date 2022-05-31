const express = require('express')
const mongoose = require('mongoose')
const mainAPI = require('./routes/main')
const article = require('./models/article')

const app = express()
const urlencodedParser = express.urlencoded({extended: false})
const url = 'token'

mongoose.connect(url)
    .then(() => console.log('Mongodb has connected'))
    .catch(error => console.log(error))

app.use('/api/main', mainAPI)
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))
app.get('/:id', (req, res) => res.sendFile(__dirname + '/public/article.html'))
app.get('/newpost/', (req, res) => res.sendFile(__dirname + '/public/post.html'))
app.post('/newpost/done', urlencodedParser, function (req, res) {
    title = req.body.title
    author = req.body.author
    date = req.body.date
    content = req.body.content
    tags = req.body.tags
    if (title && author && date && content && tags != "") {
        res.status(200).send("<h2>New Article Added!</h2>")
        article.insertMany([{
            title: title,
            authors: [author],
            publication_date: date,
            contents: content,
            tags: [tags]
        }])
    } else {
        res.status(200).send("<h2>New Article not Added! Some fields were empty!</h2>")
    }
})

module.exports = app