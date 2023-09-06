import { Controller, Get, Post } from '@nestjs/common';

@Controller('/user')
export class UserController {
  @Post()
  signUp() {}

  @Post()
  signIn() {}

  @Get()
  signOut() {}

  @Get()
  verifyUser() {}
}
