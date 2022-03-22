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
    name: 'Libbi Dunham',
    dob: '9/9/2002',
    pob: 'Crescent City, California',
  };

  it('inserts a row into the authors table', async () => {
    const res = await request(app).post('/api/v1/authors').send(expected);
    expect(res.body).toEqual({ id: expect.any(String), ...expected });
  });
});
