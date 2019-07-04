import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from "@angular/router";

import {UsersService} from "../../shared/services/users.service";
import {AuthService} from "../../shared/services/auth.service";
import {UserCheckService} from "../../shared/services/user-check.service";
import {Message} from "../../shared/models/message.model";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usersList: User[];
  message: Message;

  constructor(private usersService: UsersService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private userCheckService: UserCheckService) {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe((users) => this.usersList = users);
    this.message = new Message('danger', '');

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['accessDenied']) {
          this.showMessage({
            text: 'Для доступа необходимо авторизоваться!',
            type: 'warning'
          })
        } else if (params['nowCanLogin']) {
          this.showMessage({
            text: 'Теперь можете авторизоваться!',
            type: 'success'
          })
        }
      });

  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => this.message.text = '', 3000);
  }

  onSubmit() {
    const user: User = this.userCheckService.checkUserByEmail(this.loginForm.get('email').value, this.usersList);

    if (user && user['password'] === this.loginForm.get('password').value) {
      this.authService.login();
      window.localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/system']);
    } else {
      this.showMessage({
        text: 'Неверные данные для входа!',
        type: 'danger'
      });
    }
  }
}
