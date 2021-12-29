export class NewUserRequestDTO {
  account_status: string = '';
  name: string = '';
  surname: string = '';
  role: string = '';
  email: string = '';
  password: string = '';
  phone_number: string = '';


  constructor(account_status: string, name: string, surname: string, role: string, email: string, password: string,
              phone_number: string)
  {
    this.account_status = account_status;
    this.name = name;
    this.surname = surname;
    this.role = role;
    this.email = email;
    this.password = password;
    this.phone_number = phone_number;
  }
}
