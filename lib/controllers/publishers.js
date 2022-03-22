const { Router } = require('express');
const Publisher = require('../models/Publisher');

module.exports = Router()
  // CREATE / INSERT
  .post('/', async (req, res) => {
    const publisher = await Publisher.insert(req.body);
    res.send(publisher);
  })
  // SELECT ALL
  .get('/', async (req, res) => {
    const publishers = await Publisher.getAll();
    res.send(publishers);
  })
  // SELECT ID
  .get('/:id', async (req, res) => {
    const publisher = await Publisher.getById(req.params.id);
    res.send(publisher);
  });
