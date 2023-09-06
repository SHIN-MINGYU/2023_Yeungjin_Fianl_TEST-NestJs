import { registerAs } from '@nestjs/config';

// AuthService 에 쓰이는 설정값
export default registerAs('auth', () => ({
  jwtSecret: process.env.JWT_SECRET,
}));
