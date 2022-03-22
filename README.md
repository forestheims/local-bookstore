# local-bookstore Plan

- Vertically Build
  - create the app route for the resource (and associated contoller file)
    - FOR EACH ROUTE OF A RESOURCE (post, get, update, delete)
    - write test
    - write the controller and the model
    - make sure the test passes

## Tables

- publishers
  - [x] INSERT
  - [x] GET ALL
  - [x] GET BY ID
- authors
  - [] INSERT
  - [] GET ALL
  - [] GET BY ID
- books
  - [x] INSERT
  - [] GET ALL
  - [] GET BY ID
- reviewers
  - [] INSERT
  - [] GET ALL
  - [] GET BY ID
  - [] UPDATE
  - [] DELETE
  - reviews related to the reviewer MUST be deleted first
- reviews
  - [] INSERT
  - [] GET ALL
    - limit to top 100 highest rated
- publishers_books

?? junction_tables

- book_author
- book_reviews

## Instance methods for joined tables
