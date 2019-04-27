import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';
import { StartupsService } from 'src/app/providers/startups.service';

@Component({
  selector: 'app-startup-list',
  templateUrl: './startup-list.component.html',
  styleUrls: ['./startup-list.component.scss']
})
export class StartupListComponent implements OnInit {
  // startups: Observable<any>;
  startups: any[];
  constructor(public startupService: StartupsService, private apollo: Apollo) { }

  ngOnInit() {
    // this.startups = this.apollo
    //   .watchQuery<any>({
    //     query: gql`
    //       query GetAllStartups {
    //         allStartups {
    //           name
    //           teamCount
    //           description
    //           imageUrl
    //           annualReceipt
    //           Segment {
    //             name
    //             code
    //           }
    //         }
    //       }
    //     `,
    //   })
    //   .valueChanges
    //   .pipe(
    //     map(result => result.data.allStartups)
    //   );
    this.startups = this.startupService.list();
    console.log(this.startups);
  }
}