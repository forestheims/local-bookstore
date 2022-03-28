const pool = require('../utils/pool');

module.exports = class Author {
  id;
  name;
  dob;
  pob;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.dob = new Date(row.dob).toLocaleDateString('en-US');
    this.pob = row.pob;
  }

  static async insert({ name, dob, pob }) {
    const { rows } = await pool.query(
      'INSERT INTO authors(name, dob, pob) VALUES ($1, $2, $3) RETURNING *;',
      [name, dob, pob]
    );
    return new Author(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
    SELECT * FROM authors
    `
    );
    return rows.map((row) => new Author(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM authors WHERE id=$1', [
      id,
    ]);
    return new Author(rows[0]);
  }

  async getBooks() {
    const { rows } = await pool.query(
      `
      SELECT
        books.id,
        books.title,
        books.released
      FROM
        authors
      LEFT JOIN
        authors_books
      ON
        authors.id = authors_books.authors_id
      LEFT JOIN
        books
      ON
        authors_books.books_id = books.id
      WHERE
        authors.id = $1

      `,
      [this.id]
    );

    this.books = rows;

    return this;
  }
};
