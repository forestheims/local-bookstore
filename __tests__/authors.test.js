const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Author = require('../lib/models/Author');

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

  //CREATE
  it('inserts a row into the authors table', async () => {
    const res = await request(app).post('/api/v1/authors').send(expected);
    expect(res.body).toEqual({ id: expect.any(String), ...expected });
  });

  //SELECT ALL
  it('gets all rows from authors table', async () => {
    const authors = await Author.insert(expected);
    const res = await request(app).get('/api/v1/authors');
    expect(res.body).toEqual([{ id: authors.id, ...authors }]);
  });

  //SELECT BY ID
  it('gets an author by id', async () => {
    const author = await Author.insert(expected);
    const res = await request(app).get(`/api/v1/authors/${author.id}`);
    expect(res.body).toEqual({ id: author.id, ...author });
  });
});
