import { Component, OnInit, Input } from '@angular/core';
import startups from 'src/app/providers/startups.service';

@Component({
  selector: 'app-ranking-item',
  templateUrl: './ranking-item.component.html',
  styleUrls: ['./ranking-item.component.scss']
})
export class RankingItemComponent implements OnInit {

  @Input() position:any = '#';
  @Input() startup:any = '';
  @Input() average:any = '';
  @Input() criterion:any = '';
  

  constructor() { }

  ngOnInit() {
  }

}