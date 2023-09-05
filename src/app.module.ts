import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { BoardModule } from './boards/board.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, BoardModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
