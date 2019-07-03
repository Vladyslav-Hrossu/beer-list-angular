import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../../shared/services/users.service";
import {UserCheckService} from "../../shared/services/user-check.service";
import {Message} from "../../shared/models/message.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;
  usersList: any[];
  message: Message;

  constructor(private usersService: UsersService,
              private userCheckService: UserCheckService,
              private router: Router
              ) {
    this.regForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    })
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
    const formData = this.regForm.value;
    if(!this.userCheckService.checkUserByEmail(formData['email'], this.usersList)){
      this.usersList.push(formData);
      this.usersService.addUser(this.usersList)
        .subscribe();
      this.router.navigate(['/login']);
    } else {
      this.showMessage({
        text: 'Пользователь с таким email уже зарегестрирован!',
        type: 'danger'
      })
    }
  }
}
