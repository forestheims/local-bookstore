-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS publishers_books CASCADE;
DROP TABLE IF EXISTS publishers CASCADE;
DROP TABLE IF EXISTS books CASCADE;

CREATE TABLE publishers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    city TEXT,
    state TEXT,
    country TEXT
);

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    released INT NOT NULL
);

CREATE TABLE publishers_books (
    publisher_id BIGINT REFERENCES publishers(id),
    books_id BIGINT REFERENCES books(id)
);