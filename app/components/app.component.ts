import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../services/implementations/app.baseServiceImplementations'
import { UserModel } from '../models/app.user.model'

@Component({
  selector: 'my-app',
  templateUrl: `templates/main-template.html`,
})
export class AppComponent implements OnInit {
  User: UserModel;
  constructor(private Storage: LocalStorageService<UserModel>) {

  }
  private watchChanges() {
    let listen = this.Storage.watchChanges()
      .subscribe(value => {
        this.UpdateUserName(value);
      },
      error => {
        console.log(error)
      })
  }
  private UpdateUserName(user: UserModel) {
    if (user) {
      this.User.UserName = user.UserEmail;
    }
  }
  getVal(){
    return this.User.UserName;
  }
  ngOnInit() {
    this.User = new UserModel()
    this.watchChanges();
  }
}
