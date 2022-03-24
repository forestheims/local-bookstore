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
  - [x] INSERT
  - [x] GET ALL
  - [x] GET BY ID
- books
  - [x] INSERT
  - [x] GET ALL
  - [x] GET BY ID
- reviewers
  - [x] INSERT
  - [x] GET ALL
  - [x] GET BY ID
  - [x] UPDATE
  - [x] DELETE
    - [x] reviews related to the reviewer MUST be deleted first
- reviews
  - [x] INSERT
  - [x] GET ALL -[x]limit to top 100 highest rated
- publishers_books

?? junction_tables

- book_author
- book_reviews

## Instance methods for joined tables

-Publishers

- [x] getBooks
      -Books
- [x] getPublisher
- [] getAuthors
- [] getReviews(getReviewer?)

  -Authors

- [] getBooks
  -Reviewers
- [] getReviews
