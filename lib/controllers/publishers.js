const { Router } = require('express');
const Publisher = require('../models/Publisher');

module.exports = Router()
  // CREATE / INSERT
  .post('/', async (req, res) => {
    const publisher = await Publisher.insert(req.body);
    res.send(publisher);
  });
