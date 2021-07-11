In this example we have Author and Book models. This models are these models are united in a ResultUnion.

Author model must resolve list of books, Book model must resolve it author.

I can't find a solution to get this query to work:

```
query Result {
	search {
    ... on Author {
      name
      books {
        title
      }
    }
    ...on Book {
      title
      author {
        name
      }
    }
  }
}
```