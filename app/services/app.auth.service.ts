import { LocalStorageService } from './implementations/app.baseServiceImplementations'
import { UserModel } from '../models/app.user.model'
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Constants } from '../config/app.constants'

@Injectable()
export class AutService extends LocalStorageService<UserModel>{
    constructor() {
        super()
    }
    isLoggedIn(): boolean {
        let user = this.getItem(this.Constants.user_local_key);
        return user != null;
    }
}