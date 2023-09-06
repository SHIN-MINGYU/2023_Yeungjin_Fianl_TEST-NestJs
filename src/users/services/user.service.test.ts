import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService (unit)', () => {
  let service: UserService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  // 구현해야 함
  it('createUser', () => {});

  // 구현해야 함
  it('updateUser', () => {});

  // 구현해야 함
  it('deleteUser', () => {});

  // 구현해야 함
  it('verifyUser', () => {});
});
