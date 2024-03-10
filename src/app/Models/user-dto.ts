export class UserDto {
  email: string;
  password: string;
  name: string;
  surname1: string;
  surname2!: string;
  alias: string;
  birthDate: string;

  constructor(
    email: string,
    password: string,
    name: string,
    surname1: string,
    alias: string,
    birthDate: string
  ) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname1 = surname1;
    this.alias = alias;
    this.birthDate = birthDate;
  }
}
