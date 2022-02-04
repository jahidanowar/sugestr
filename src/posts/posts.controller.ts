import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
  @Get('create')
  create(): string {
    return 'This action adds a new cat';
  }
}
