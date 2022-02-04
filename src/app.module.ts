import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
