const pool = require('../utils/pool');

module.exports = class Book {
  id;
  title;
  released;
  publisherId;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
    this.publisherId = row.publisher_id;
  }

  static async insert({ title, released, publisherId }) {
    const { rows } = await pool.query(
      'INSERT INTO books(title, released, publisher_id) VALUES ($1, $2, $3) RETURNING * ;',
      [title, released, publisherId]
    );
    return new Book(rows[0]);
  }

  static async getAll() {
    // JOIN to get publisherID
    const { rows } = await pool.query('SELECT * FROM books;');
    return rows.map((row) => new Book(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM books WHERE id=$1', [id]);
    return new Book(rows[0]);
  }

  async getPublishers() {
    const { rows } = await pool.query(
      `
      SELECT
        publishers.id,
        publishers.name
      FROM
        books
      LEFT JOIN
        publishers
      ON
        publishers.id = books.publisher_id
      WHERE
        books.id = $1
      `,
      [this.id]
    );

    this.publisher = rows[0];

    return this;
  }

  async getAuthors() {
    const { rows } = await pool.query(
      `
      SELECT
        authors.id,
        authors.name
      FROM
        books
      LEFT JOIN
        authors_books
      ON
        books.id = authors_books.books_id
      LEFT JOIN
        authors
      ON
        authors.id = authors_books.authors_id
      WHERE
        books.id = $1
      `,
      [this.id]
    );

    this.authors = rows;

    return this;
  }
  async getReviews() {
    const { rows } = await pool.query(
      `
      SELECT
        reviews.id,
        reviews.rating,
        reviews.review
      FROM
        books
      LEFT JOIN
        reviews
      ON
        books.id = reviews.book
      WHERE
        books.id = $1
      `,
      [this.id]
    );

    this.reviews = rows;

    return this;
  }
};
