import { Component, OnInit, Input } from '@angular/core';
import { StarService } from 'src/app/providers/star.service';
import { StartupsService } from 'src/app/providers/startups.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  
  @Input() criterion: string = '';
  @Input() title: string = '';

  avgStartups: any = [];

  constructor(private starService: StarService, public startupService: StartupsService) { }

  ngOnInit() {
    // get startup list
    let startupsName = this.startupService.getListOfNameSlug();
 
    // picks ordered averages
    startupsName.forEach(element => {
      this.starService.getAverageStars(this.criterion, element).subscribe(
        doc => {
          const ratings = doc.map(v => v['value']);
          let average = ratings.length ? ratings.reduce((total, val) => total + val) / doc.length : 0;
          this.avgStartups.push({startup: element, average: average});      
        }
      );     
    });
  }
  
  //sorting 
  get sortData() {
    return this.avgStartups.sort((a, b) => {
      return b.average - a.average;
    });
  }
}
