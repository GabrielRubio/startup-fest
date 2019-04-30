import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
const BASEURL = window.location.href;


import { StartupsService } from 'src/app/providers/startups.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


@Component({
  selector: 'app-startup-list',
  templateUrl: './startup-list.component.html',
  styleUrls: ['./startup-list.component.scss']
})
export class StartupListComponent implements OnInit {
  startups: any[];
  constructor(public startupService: StartupsService, private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
         .watchQuery<any>({
           query: gql`
             {
               allStartups {
                 name
                 description
                 imageUrl
                 Segment {
                   name
                 }
               }
             }
           `,
         })
         .valueChanges
         .subscribe(
           result => {
             //get all startups
             this.startups = result.data.allStartups;

             //add fields
             this.startups.map((startup, i:number) => {
                // name in-slug-format
                this.startups[i].nameSlug = _.kebabCase(startup.name);
        
                // route
                this.startups[i].router = '/startup/' + this.startups[i].nameSlug;
        
                // url
                this.startups[i].url = BASEURL + this.startups[i].router;
             });
          }
         );
    // this.startups = this.startupService.list();
  }
}