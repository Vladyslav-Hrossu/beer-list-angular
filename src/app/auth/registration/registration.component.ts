import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../shared/services/users.service";
import {UserCheckService} from "../../shared/services/user-check.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;
  usersList: any[];

  constructor(private usersService: UsersService, private userCheckService: UserCheckService) {
    this.regForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    })
  }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe((users) => this.usersList = users);
  }

  onSubmit(){
    const formData = this.regForm.value;
    if(!this.userCheckService.checkUserByEmail(formData['email'], this.usersList)){
      this.usersList.push(formData);
      this.usersService.addUser(this.usersList)
        .subscribe((data)=>console.log(data));
    } else {
      console.log('already registered');
    }
  }
}
