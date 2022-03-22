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
};
