const { Router } = require('express');
const Author = require('../models/Author');

module.exports = Router()
  //CREATE
  .post('/', async (req, res) => {
    const author = await Author.insert(req.body);
    res.send(author);
  })
  //SELECT ALL
  .get('/', async (req, res) => {
    const authors = await Author.getAll();
    res.send(authors);
  });
