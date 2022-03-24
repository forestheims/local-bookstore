const { Router } = require('express');

const Review = require('../models/Review');

module.exports = Router()
  // CREATE / INSERT
  .post('/', async (req, res) => {
    const review = await Review.insert(req.body);
    res.send(review);
  })
  // GET ALL
  .get('/', async (req, res) => {
    const review = await Review.getAll();
    res.send(review);
  });
