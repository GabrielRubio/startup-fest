import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import startups from './startups.json';
const BASEURL = window.location.href;
export default startups;

import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { reject } from 'q';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class StartupsService {

  startups2:any[];
  startups: any;
  loading: boolean = true;

  
  constructor(private apollo: Apollo) { }

  // list the startups that are in JSON (startups.json) 
   list() {
    this.startups2 = startups.data.allStartups;
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

  // selects a startup by the name slug
  view(nameSlug:string){
    let startups = this.list();
    let startup = _.find(startups, (p) =>{
      return p.nameSlug == nameSlug;
    });
    return startup;
  }

  // returns the slug name list
  getListOfNameSlug(){
    let startups = this.list();
    let names = startups.map((startup, i)=>{
      return startup.nameSlug;
    });
    return names;
  }
}
