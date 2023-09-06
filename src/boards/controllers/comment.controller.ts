import {
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
// URL : /comment/*
@Controller('/comment')
export class CommentController {
  /**
   * @description [GET] 댓글 조회  함수입니다. 게시글 기본키를 통해 하나의 게시글에 달려 있는 댓글들을 조회합니다..
   * @query {number} postId 조회할 댓글들의 게시글의 기본키입니다.
   * @returns  success : 조회한 댓글들 대한 정보  error : Status Code 400 Can't Found
   */
  @Get('/')
  getComments(@Query() commentQuery) {}

  /**
   * @description [POST] 댓글 생성  함수입니다. 게시글 기본키를 통해 해당 게시글에 댓글을 답니다.
   * @query {number} postId 생성할 댓글을 달  게시글의 기본키입니다.
   * @returns  success : 생성한 댓글의 정보,  error : Status Code 400 Can't Found
   */
  @Post('/')
  createComment(@Query() commentQuery) {}

  /**
   * @description [PUT] 댓글 수정  함수입니다. 댓글의 기본키를 통해 댓글을 수정합니다.
   * @param {number} commentId 수정할 댓글의 기본키 입니다.
   * @returns  success : 수정한 댓글 대한 정보  error : Status Code 400 Can't Found
   */
  @Put('/:id')
  updateComment(@Param('id') commentId: number) {}

  /**
   * @description [DELETE] 댓글 삭제  함수입니다. 댓글의 기본키를 통해 댓글을 삭제합니다.
   * @param {number} commentId 조회할 게시글의 기본키입니다.
   * @returns  success :  삭제 성공 여부  error : Status Code 400 Can't Found
   */
  @Delete('/id')
  deleteComment(@Param('id') commentId: number) {}
}
