import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import startups from './startups.json';
const BASEURL = window.location.href;
export default startups;

import * as _ from 'lodash';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class StartupsService {
  startups2:any[];
  
  constructor() { }
 
  list() {
    this.startups2 = startups.data.allStartups;
    console.log(this.startups2);
    this.startups2.map((startup, i:number) => {
        // id
        this.startups2[i].id = i;
        
        // name in-slug-format
        this.startups2[i].nameSlug = _.kebabCase(startup.name);

        // route
        this.startups2[i].router = '/startup/' + this.startups2[i].nameSlug;

        // url
        this.startups2[i].url = BASEURL + this.startups2[i].router;
      });
    return this.startups2;
  }

  view(nameSlug:string){
    let startups = this.list();
    let startup = _.find(startups, (p) =>{
      return p.nameSlug == nameSlug;
    });
    return startup;
    // return new Promise((resolve, reject) => {
    //   this.list().then((products: any[]) => {
    //     let product = _.find(products, (p) =>{
    //       return p.nameSlug == nameSlug;
    //     });
    //     return product ? resolve(product) : reject('product not found');
    //   })
    // })

  }
}
