import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

import {UsersService} from "../../shared/services/users.service";
import {AuthService} from "../../shared/services/auth.service";
import {UserCheckService} from "../../shared/services/user-check.service";
import {Message} from "../../shared/models/message.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usersList: [];
  message: Message;

  constructor(private usersService: UsersService,
              private authService: AuthService,
              private router: Router,
              private userCheckService: UserCheckService
              ) {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => this.message.text = '', 3000);
  }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe((users) => this.usersList = users);
    this.message = new Message('danger', '');
  }
  onSubmit(){
    const user = this.userCheckService.checkUserByEmail(this.loginForm.get('email').value, this.usersList);

    if(user['password'] === this.loginForm.get('password').value){
      this.authService.login();
      this.router.navigate(['/system']);
    } else {
      this.showMessage({
        text: 'Неверные данные для входа!',
        type: 'danger'
      }) ;
    }


  }

}
