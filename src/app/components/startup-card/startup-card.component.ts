import { Component, OnInit, Input } from '@angular/core';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-startup-card',
  templateUrl: './startup-card.component.html',
  styleUrls: ['./startup-card.component.scss']
})
export class StartupCardComponent implements OnInit {
  
  @Input() startup: any = {};
  @Input() view: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
