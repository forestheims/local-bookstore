const { Router } = require('express');
const Reviewer = require('../models/Reviewer');

module.exports = Router()
  .post('/', async (req, res) => {
    const reviewer = await Reviewer.insert(req.body);
    res.send(reviewer);
  })

  .get('/', async (req, res) => {
    const reviewers = await Reviewer.getAll();
    res.send(reviewers);
  })

  .get('/:id', async (req, res) => {
    const reviewer = await Reviewer.getById(req.params.id);
    res.send(reviewer);
  })

  .patch('/:id', async (req, res) => {
    const reviewer = await Reviewer.update(req.params.id, req.body);
    res.send(reviewer);
  });
