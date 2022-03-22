# local-bookstore Plan

- Vertically Build
  - create the app route for the resource (and associated contoller file)
    - FOR EACH ROUTE OF A RESOURCE (post, get, update, delete)
    - write test
    - write the controller and the model
    - make sure the test passes

## Tables

- Publisher
  - INSERT -
  - GET ALL - [{ id, name }]
  - GET BY ID - { id, name, city, state, country, **_books: [{ id, title }]_** }
- Author
  - GET ALL - [{ id, name }]
  - GET BY ID - { name, dob, pob, \*\*\*books: [{ id, title, released }] }
- Book
  - GET ALL - [{ id, title, released, ***publisher: { id, name }*** }]
  - GET BY ID - { title, released, **_publisher: { id, name }_**, **_authors: [{ id, name }]_**, **_reviews: [{ id, rating, review, reviewer: { id, name }]_**
    }
- Reviewer
  - UPDATE - {}
  - DELETE - {}
    - reviews related to the reviewer MUST be deleted first
- Review

?? junction_tables

- book_author
- book_publisher
- book_reviews

## Instance methods for joined tables
