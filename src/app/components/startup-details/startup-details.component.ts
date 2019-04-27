import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-startup-details',
  templateUrl: './startup-details.component.html',
  styleUrls: ['./startup-details.component.scss']
})
export class StartupDetailsComponent implements OnInit {

  @Input() startup: any = {};
  constructor() { }

  ngOnInit() {
  }

}
