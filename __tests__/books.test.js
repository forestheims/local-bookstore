const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
// const Book = require('../lib/models/Book');

describe('local-bookstore routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  const expected = {
    title: 'Harry Poter',
    released: 2001,
  };

  //CREATE
  it('inserts a row into books table', async () => {
    const res = await request(app).post('/api/v1/books').send(expected);
    expect(res.body).toEqual({ id: expect.any(String), ...expected });
  });

  //GET ALL
  it('gets all rows from books table', async () => {
    await request(app).post('/api/v1/books').send(expected);
    const res = await request(app).get('/api/v1/books');
    expect(res.body).toEqual([{ id: expect.any(String), ...expected }]);
  });
});
