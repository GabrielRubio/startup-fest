import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StartupsService } from 'src/app/providers/startups.service';

@Component({
  selector: 'app-startup-list',
  templateUrl: './startup-list.component.html',
  styleUrls: ['./startup-list.component.scss']
})
export class StartupListComponent implements OnInit {
  startups: any[];
  constructor(public startupService: StartupsService) { }

  ngOnInit() {
    this.startups = this.startupService.list();
  }
}