const pool = require('../utils/pool');

module.exports = class Reviewer {
  id;
  name;
  company;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.company = row.company;
  }

  static async insert({ name, company }) {
    const { rows } = await pool.query(
      'INSERT INTO reviewers(name, company) VALUES ($1, $2) RETURNING *;',
      [name, company]
    );
    return new Reviewer(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM reviewers');
    return rows.map((row) => new Reviewer(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM reviewers WHERE id=$1', [
      id,
    ]);
    return new Reviewer(rows[0]);
  }

  static async update(id, newAttributes) {
    const oldAttributes = await Reviewer.getById(id);
    const { name, company } = { ...oldAttributes, ...newAttributes };
    const { rows } = await pool.query(
      'UPDATE reviewers SET name=$2, company=$3 WHERE id=$1 RETURNING *;',
      [id, name, company]
    );
    return new Reviewer(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM reviewers WHERE id=$1 RETURNING *;',
      [id]
    );
    return new Reviewer(rows[0]);
  }

  async getReviews() {
    const { rows } = await pool.query(
      `
      SELECT
        reviews.id,
        reviews.rating,
        reviews.review,
        books.id AS book_id,
        books.title AS book_title
      FROM
        reviewers
      LEFT JOIN
        reviews
      ON
        reviewers.id = reviews.reviewer
      LEFT JOIN
        books
      ON
        reviews.book = books.id
      WHERE
        reviewers.id = $1
        
      `,
      [this.id]
    );
    this.reviews = rows;
    return this;
  }
};
