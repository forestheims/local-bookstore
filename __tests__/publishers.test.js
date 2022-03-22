const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('local-bookstore routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  const expected = {
    name: 'Book Binder',
    city: 'Bellingham',
    state: 'WA',
    country: 'USA',
  };

  // CREATE
  it('inserts a row into the publishers table', async () => {
    const res = request(app).post('/api/v1/publishers').send(expected);
    expect(res.body).toEqual({ id: expect.any(String), ...expected });
  });
});
