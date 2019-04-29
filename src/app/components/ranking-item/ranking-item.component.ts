import { Component, OnInit, Input } from '@angular/core';
import { StartupsService } from 'src/app/providers/startups.service';

@Component({
  selector: 'app-ranking-item',
  templateUrl: './ranking-item.component.html',
  styleUrls: ['./ranking-item.component.scss']
})
export class RankingItemComponent implements OnInit {

  @Input() position:any = '#';
  @Input() nameSlug:any = '';
  @Input() average:any = '';
  @Input() criterion:any = '';
  
  startup: any = {};

  constructor(public startupService: StartupsService) { }

  ngOnInit() {
    this.startup = this.startupService.view(this.nameSlug);
    console.log(this.startup);
  }

}