const { Router } = require('express');
const Reviewer = require('../models/Reviewer');

module.exports = Router()
  // INSERT
  .post('/', async (req, res) => {
    const reviewer = await Reviewer.insert(req.body);
    res.send(reviewer);
  })
  // GET ALL
  .get('/', async (req, res) => {
    const reviewers = await Reviewer.getAll();
    res.send(reviewers);
  })
  // GET BY ID
  .get('/:id', async (req, res) => {
    const reviewer = await Reviewer.getById(req.params.id);
    await reviewer.getReviews();
    res.send(reviewer);
  })
  // UPDATE
  .patch('/:id', async (req, res) => {
    const reviewer = await Reviewer.update(req.params.id, req.body);
    res.send(reviewer);
  })
  // DELETE
  .delete('/:id', async (req, res, next) => {
    try {
      const reviewer = await Reviewer.delete(req.params.id);
      res.send(reviewer);
    } catch (error) {
      error.status = 404;
      error.message =
        'You cannot delete because there are reviews associated with this reviewer.';
      next(error);
    }
  });
