import {Observable} from 'rxjs/Observable';

export interface ILocalStorageService<T>{
    getItem(key:string):any;
    setItem(key:string,data:any):void;
    getObjet(key:string):T;
    watchChanges():Observable<T>;
}