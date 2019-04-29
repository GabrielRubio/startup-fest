import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { generate } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  userId: any;

  constructor(public storageLocal:StorageService) { }

  getUserId(){
    return this.storageLocal.get('userId');
  }

  register(){
    if(!this.getUserId()){
      this.userId = this.generator();
      this.storageLocal.set('userId', this.userId);
    }
  }

  // functions to creat a unique id
  private generator(): string {
    const isString = `${this.S4()}${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}${this.S4()}${this.S4()}`;

    return isString;
  }

  private S4(): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }

}
