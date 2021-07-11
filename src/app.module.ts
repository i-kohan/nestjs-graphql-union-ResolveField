import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ResultResolver } from './app.resolver';
import { GqlConfigService } from './graphql/graphql.service';


@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
  ],
  providers: [ResultResolver],
})
export class AppModule {}
