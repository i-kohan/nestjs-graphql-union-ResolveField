import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { join } from 'path';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor() {}

  createGqlOptions(): GqlModuleOptions {
    return {
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    };
  }
}
