import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user.model";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  date: Date = new Date();
  user: User = JSON.parse(window.localStorage.getItem('user'));
  constructor(private authService: AuthService,
              private router: Router) { }



  ngOnInit() {
    console.log(this.user);
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
