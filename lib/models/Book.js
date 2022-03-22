const pool = require('../utils/pool');

module.exports = class Book {
  id;
  title;
  released;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
  }

  static async insert({ title, released }) {
    const { rows } = await pool.query(
      'INSERT INTO books(title, released) VALUES ($1, $2) RETURNING * ;',
      [title, released]
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

  // async getPublisherID() {
  //   const { rows } = await pool.query(
  //     'SELECT publisher_id FROM publishers_books WHERE book_id=$1',
  //     [this.id]
  //   );

  //   this.publisherId = rows;

  //   return this;
  // }
};
