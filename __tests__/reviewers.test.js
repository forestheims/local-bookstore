const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Reviewer = require('../lib/models/Reviewer');

describe('local-bookstore routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  const expected = {
    name: 'noah',
    company: 'Nike',
  };

  //CREATE
  it('inserts a row into the reviewers table', async () => {
    const res = await request(app).post('/api/v1/reviewers').send(expected);
    expect(res.body).toEqual({ id: expect.any(String), ...expected });
  });

  //SELECT ALL
  it('gets all rows from reviewers table', async () => {
    const reviewers = await Reviewer.insert(expected);
    const res = await request(app).get('/api/v1/reviewers');
    expect(res.body).toEqual([{ id: reviewers.id, ...reviewers }]);
  });

  //SELECT BY ID
  it('gets an reviewer by id', async () => {
    const reviewer = await Reviewer.insert(expected);
    const res = await request(app).get(`/api/v1/reviewers/${reviewer.id}`);
    expect(res.body).toEqual({ id: reviewer.id, ...reviewer });
  });

  // UPDATE
  it('updates a row by id in the reviewers table', async () => {
    const reviewer = await Reviewer.insert(expected);
    const res = await request(app)
      .patch(`/api/v1/reviewers/${reviewer.id}`)
      .send({ name: 'Noah Smyth' });
    expect(res.body).toEqual({
      id: reviewer.id,
      ...expected,
      name: 'Noah Smyth',
    });
  });
  // DELETE
});
