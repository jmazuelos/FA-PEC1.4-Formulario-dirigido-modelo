import { Component, OnInit } from '@angular/core';
import { UserDto } from '../../Models/user-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  user: UserDto;

  constructor() {
    this.user = new UserDto('', '', '', '', '', '');
  }

  ngOnInit(): void {}

  checkLogin(): void {
    console.log(
      'User email: ' +
        this.user.email +
        ', User password: ' +
        this.user.password
    );
  }
}
