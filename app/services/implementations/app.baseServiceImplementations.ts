import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Constants } from '../../config/app.constants'
import { ILocalStorageService } from '../declarations/app.baseServices'
import { UserModel } from '../../models/app.user.model'

@Injectable()
export class LocalStorageService<T> implements ILocalStorageService<T>{
    private storge = window.localStorage;
    private lastChanges:string;
    public Constants:Constants;
    constructor(){
        this.Constants = new Constants();
    }
    getItem(key:string){
        return this.storge.getItem(key);
    }
    setItem(key:string,data:any){
        this.storge.setItem(key,JSON.stringify(data));
    }
    getObjet(key:string){
        let info:T;
        try{
            info = JSON.parse(this.storge.getItem(key));
            return info;
        }catch(ex){
            console.log(ex);
        }
    }
    watchChanges(){
        let changes = new Observable<T>(observer => {
          setInterval(() => {
              if(this.ReadChanges()){
                observer.next(this.getObjet(this.Constants.user_local_key));
              }
          }, 1000);
      });
    return changes;
    }
    private ReadChanges():boolean{
        let d = this.storge.getItem(this.Constants.user_local_key);
        if(d != null && d != this.lastChanges){
            this.lastChanges = d;
            return true;
        }
        return false;
    }
}