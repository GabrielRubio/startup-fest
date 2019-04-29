declare var window;
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _drive: string = 'localStorage';
  private _prefix: string = 'startup-fest';
  
  constructor() { }

  get drive(): string {
    return this._drive;
  }

  set drive(v: string){
    this._drive = v + 'Storage';
  }

  get prefix(): string{
    return this._prefix;
  }

  set prefix(v:string){
    this._prefix = v;
  }

  get(k:string, drive?: string):any {
    const _drive = drive ? drive + 'Storage' : this.drive;
    const _key = this.prefix + ':' + k;
    return JSON.parse(window[_drive].getItem(_key));
  }

  set(k:string, v:any, drive?: string):void {
    const _drive = drive ? drive + 'Storage' : this.drive;
    const _key = this.prefix + ':' + k;
    window[_drive].setItem(_key, JSON.stringify(v));
  }
  
}
