import { registerAs } from '@nestjs/config';

// EmailService에 쓰이는 설정값들
export default registerAs('email', () => ({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  baseUrl: process.env.MAIL_BASE_URL,
}));
