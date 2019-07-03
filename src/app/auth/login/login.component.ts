import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from "../../shared/services/users.service";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  usersList: [];
  constructor(private usersService: UsersService, private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe((users) => this.usersList = users);
  }
  onSubmit(){
    for(let user of this.usersList){
      if(user['email'] === this.loginForm.get('email').value){
        this.authService.login();
      }
    }
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/system']);
    }
  }

}
