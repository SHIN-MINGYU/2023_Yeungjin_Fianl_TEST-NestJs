import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/comment')
export class CommentController {
  @Get()
  getComments() {}

  @Post()
  createComment() {}

  @Put()
  updateComment() {}

  @Delete()
  deleteComment() {}
}
