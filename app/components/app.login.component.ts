import { Component, OnInit } from '@angular/core';
import { AutService } from '../services/app.auth.service';
import { UserModel } from '../models/app.user.model';
import { FormsModule } from '@angular/forms';
import { Constants } from '../config/app.constants'
import { Router } from '@angular/router';
import { LocalStorageService } from './../services/implementations/app.baseServiceImplementations'

@Component({
  templateUrl: `templates/login-template.html`
})

// Component classcls
export class LoginComponent implements OnInit {
  private Constants: Constants;
  UserModel: UserModel;

  constructor(private router: Router,private user: AutService, private Storage: LocalStorageService<UserModel>) {
    this.Constants = new Constants();
  }
  ngOnInit() {
    this.UserModel = new UserModel();
  }

  Login() {
    this.Storage.setItem(this.Constants.user_local_key,this.UserModel);
    this.router.navigate(['/']);
    return false;
  }

}