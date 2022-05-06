const express = require('express')
const mongoose = require('mongoose')
const mainAPI = require('./routes/main')

const app = express()
const url = 'token'

mongoose.connect(url)
    .then(() => console.log('Mongodb has connected'))
    .catch(error => console.log(error))

app.use('/api/main', mainAPI)
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))
app.get('/:id', (req, res) => res.sendFile(__dirname + '/public/article.html'))

module.exports = app