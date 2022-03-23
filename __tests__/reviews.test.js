const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Review = require('../lib/models/Review');
const req = require('express/lib/request');

describe('local-bookstore routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  const expected = {
    rating: 1,
    reviewer: '1',
    review: 'bad book, terrible',
    book: '1',
  };

  it('inserts a row into the review table', async () => {
    await request(app).post('/api/v1/books').send({
      title: 'Harry Poter',
      released: 2001,
    });
    await request(app).post('/api/v1/reviewers').send({
      name: 'noah',
      company: 'Nike',
    });
    const res = await request(app).post('/api/v1/reviews').send(expected);
    expect(res.body).toEqual({ id: expect.any(String), ...expected });
  });
});
