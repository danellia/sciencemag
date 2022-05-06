const express = require('express')
const article = require('../models/article')
const router = express.Router()

//http://localhost:3000/api/main/
router.get('/', async function(req, res) {
    const articles = await article.find()
    res.send(articles)
})

//http://localhost:3000/api/main/title/:title
router.get('/title/:title', async function(req, res) {
    var query = '.*' + req.params.title + '.*'
    const articles = await article.find({
        title: {$regex: query, $options: 'i'}
    })
    res.status(200).json(articles)
})

//http://localhost:3000/api/main/:id
router.get('/:id', async function(req, res) {
    const articles = await article.find({
        _id: req.params.id
    })
    res.send(articles)
})

//http://localhost:3000/api/main/date/:datestart/:dateend
router.get('/date/:datestart/:dateend', async function(req, res) {
    const articles = await article.find({
        publication_date: { 
            $gte: req.params.datestart,
            $lte: req.params.dateend
        }
    })
    res.send(articles)
})

//http://localhost:3000/api/main/authors/:authors
router.get('/authors/:authors', async function(req, res) {
    const articles = await article.find({
        authors: req.params.authors
    })
    res.status(200).json(articles)
})

//http://localhost:3000/api/main/authors/all
router.get('/authors/all', async function(req, res) {
    const articles = await article.find(
        {}, 'title'
    ).exec()
    console.log(articles)
    res.status(200).json(articles)
})

module.exports = router