import { ObjectType, Field, createUnionType } from "@nestjs/graphql";

@ObjectType()
export class Author {
  @Field()
  name: string;

  @Field(() => [Book], { nullable: true })
  books: [Book];
}

@ObjectType()
export class Book {
  @Field()
  title: string;

  @Field(() => Author)
  author: Author
}


export const ResultUnion = createUnionType({
  name: 'ResultUnion',
  types: () => [Author, Book],
  resolveType(value) {
    if (value.name) {
      return Author;
    }
    if (value.title) {
      return Book;
    }
    return null;
  },
});