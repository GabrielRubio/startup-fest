import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ranking-item',
  templateUrl: './ranking-item.component.html',
  styleUrls: ['./ranking-item.component.scss']
})
export class RankingItemComponent implements OnInit {

  @Input() position:any = '#';
  constructor() { }

  ngOnInit() {
  }

}