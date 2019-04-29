import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/providers/session.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public session:SessionService) { }

  ngOnInit() {
    this.session.register();
  }

}
