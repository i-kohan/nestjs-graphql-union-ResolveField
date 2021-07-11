import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Author, Book, ResultUnion } from './app.models';

const authors = [{
  id: 1,
  name: 'First author',
}, {
  id: 2,
  name: 'Second author',
}, {
  id: 3,
  name: 'Third author',
}]

const books = [{
  id: 1,
  title: "First book",
  authorId: 1,
}, {
  id: 2,
  title: 'Second book',
  authorId: 1,
}, {
  id: 3,
  title: 'Third book',
  authorId: 2,
}]


@Resolver(() => Author)
export class AuthorResolver {
  @ResolveField(returns => Book)
  books(@Parent() author) {
    return books.filter(({ authorId }) => author.id === authorId);
  }
}

@Resolver(() => Book)
export class BookResolver {
  @ResolveField(returns => Author)
  author(@Parent() book) {
    return authors.find(({ id }) => book.id === id);
  }
}



@Resolver(() => ResultUnion)
export class ResultResolver {
  @Query(returns => [ResultUnion])
  search() {
    return [...authors, ...books];
  }
}