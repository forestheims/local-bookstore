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

-authors_books

- reviewers

  - [x] INSERT
  - [x] GET ALL
  - [x] GET BY ID
  - [x] UPDATE
  - [x] DELETE
    - [x] reviews related to the reviewer MUST be deleted first

- reviews
  - [x] INSERT
  - [x] GET ALL
    - [x] limit to top 100 highest rated

## Instance methods

-Publishers - [x] getBooks

-Books - [x] getPublisher - [x] debugging - [x] getAuthors - [x] getReviews(getReviewer?)

-Authors - [x] getBooks

-Reviewers - [x] getReviews
