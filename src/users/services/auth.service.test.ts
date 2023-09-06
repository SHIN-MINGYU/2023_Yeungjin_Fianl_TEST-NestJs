import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService (unit)', () => {
  let service: AuthService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  // 구현해야 함
  it('verifyToken', () => {});

  // 구현해야 함
  it('verifyEmail', () => {});

  // 구현해야 함
  it('login', () => {});

  // 구현해야 함
  it('logout', () => {});
});
