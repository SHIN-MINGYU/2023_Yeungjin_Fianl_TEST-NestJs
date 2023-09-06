// 인증처리에 관한 서비스 프로바이더
// 주로 유저인증,로그인, 로그아웃에 관련된 처리를 한다.
export class AuthService {
  constructor() {}

  /**
   * @description 해당 토큰이 유효한 지에 대한 것을 검사하는 함수입니다.
   * @param token 발행받은 토큰
   *
   */
  verifyToken(token: string) {}

  /**
   * @description 이메일 인증을 하는 함수입니다. 이메일을 보내고 해당 함수를 바탕으로 회원가입을 진행합니다.
   */
  verifyEmail() {}

  /**
   * @description 로그인 함수입니다. 유저 credential정보를 확인합니다.
   */
  login() {}

  /**
   * @description 로그아웃 함수입니다. 클라이언트가 가지고 있는 쿠키를 삭제하고, 데이터베이스에 결과를 반영합니다.
   */
  logout() {}
}
