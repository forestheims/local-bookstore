const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  // CREATE / INSERT
  .post('/', async (req, res) => {
    const book = await Book.insert(req.body);
    res.send(book);
  })
  // GET ALL
  .get('/', async (req, res) => {
    const books = await Book.getAll();
    res.send(books);
  })

  .get('/:id', async (req, res) => {
    const book = await Book.getById(req.params.id);
    await book.getPublishers();
    res.send(book);
  });
