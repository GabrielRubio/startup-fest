import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

@Component({
  selector: 'app-startup-list',
  templateUrl: './startup-list.component.html',
  styleUrls: ['./startup-list.component.scss']
})
export class StartupListComponent implements OnInit {
  startups: Observable<any>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.startups = this.apollo
      .watchQuery<any>({
        query: gql`
          query GetAllStartups {
            allStartups {
              name
              teamCount
              description
              imageUrl
              annualReceipt
              Segment {
                name
                code
              }
            }
          }
        `,
      })
      .valueChanges.pipe(
        map(result => result.data.allStartups)
      );
  }
}