export class AuthResponseDTO {
  userUuid: string = '';
  email: string = '';
  token: string = '';

  constructor(userUuid: string, email: string, token: string) {
    this.userUuid = userUuid;
    this.email = email;
    this.token = token;
  }
}
