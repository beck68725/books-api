const router = require('express').Router()
const db = require('../models')


//index
books.get('/', (req, res) => {
 db.Books.find()
 .then((books) => {
     res.render('books', {books})
 })
 .catch()
})

books.get('/:id', (req, res) => {
    db.Books.findByIdAndUpdate(req.params.id)
  .then(books => {
      console.log(book.title)
      res.render('books', { books })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

books.put('/:id', (req, res) => {
    db.Books.findByIdAndUpdate(req.params.id)
  .then(books => {
      console.log(book.title)
      res.render('books', { books })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

books.delete('/:id', (req, res) => {
    db.Books.findByIdAndUpdate(req.params.id)
  .then(books => {
      console.log(book.title)
      res.render('books', { books })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})
module.exports = router