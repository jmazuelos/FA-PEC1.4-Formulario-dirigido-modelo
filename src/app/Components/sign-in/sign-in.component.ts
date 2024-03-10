import { Component, OnInit } from '@angular/core';
import { UserDto } from '../../Models/user-dto';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements OnInit {
  user: UserDto;
  isValidForm: boolean = true;

  constructor() {
    this.user = new UserDto('', '', '', '', '', '');
  }

  ngOnInit(): void {}

  /**
   * Transforma el formato de fecha a 'YYYY-MM-DD'
   * @param event
   */
  handleFormatDate(event: any): void {
    let date = new Date(event.target.value);
    let formattedDate = `${date.getFullYear()}-${(
      '0' +
      (date.getMonth() + 1)
    ).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
    this.user.birthDate = formattedDate;
  }

  /**
   * Transforma el formato de fecha de 'YYYY-MM-DD' a 'DD/MM/YYYY'
   * @param date
   * @returns
   */
  formatDefaultDate(date: string) {
    let [year, month, day] = date.split('-');
    let formattedDefaultDate = `${day}/${month}/${year}`;

    return formattedDefaultDate;
  }

  /**
   * Muestra informacion del usuario al registrarse.
   * Else: muestra un mensaje de campos incompletos
   * @param signInForm
   */
  checkSignIn(signInForm: any): void {
    if (signInForm.valid) {
      console.log(
        'User email: ' +
          this.user.email +
          ', User password: ' +
          this.user.password +
          ', name: ' +
          this.user.name +
          ', surname1: ' +
          this.user.surname1 +
          (this.user.surname2 ? ', surname2: ' + this.user.surname2 : '') +
          ', alias: ' +
          this.user.alias +
          ', birth Date: ' +
          this.formatDefaultDate(this.user.birthDate)
      );
    } else {
      this.isValidForm = false;
      console.log('Existe uno o varios campos erróneos');
    }
  }
}
