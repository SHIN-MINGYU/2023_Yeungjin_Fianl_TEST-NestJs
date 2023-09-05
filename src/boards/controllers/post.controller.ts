import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

// 게시글에 대한 컨트롤러
// 게시글의 CRUD기능을 포함하고 있다.
// URL : /post/*
@Controller('/post')
export class PostController {
  /**
   * @description [GET] 게시글 조회  함수입니다. 게시글 기본키를 통해 하나의 게시글을 조회합니다.
   * @param {number} postId 조회할 게시글의 기본키입니다.
   * @returns  success : 조회한 게시글 대한 정보  error : Status Code 400 Can't Found
   */
  @Get('/:id')
  getPost(@Param('id') postId: number) {}

  /**
   * @description [GET] 게시글 조회 함수입니다. 페이징에 쓰기위해 limit 와 offset을  QS로 받아옵니다.
   * @query limit  : 조회 최대 갯수
   * @query offset  : 시작 인덱스
   * @returns  success : 조회한 게시글들에 대한 대략적인 정보  error : Status Code 400 Can't Found
   */
  @Get()
  getPosts(@Query() postQuery) {}

  @Post()
  createPost(@Body() body: any) {}

  /**
   * @description [Put] 게시글 수정 함수입니다.
   * @param {number} postId 수정할 게시글의 기본키입니다.
   * @returns  success : 수정한 게시글에 대한 정보  error : Status Code 400 Can't Found
   */
  @Put('/:id')
  updatePost(@Param('id') postId: number) {}

  /**
   * @description [Delete] 게시글 삭제 함수입니다.
   * @param {number} postId 삭제할 게시글의 기본키입니다.
   * @returns  success : 조회한 게시글들에 대한 대략적인 정보  error : Status Code 400 Can't Found
   */
  @Delete('/:id')
  deletePost(@Param('id') postId: number) {}
}
