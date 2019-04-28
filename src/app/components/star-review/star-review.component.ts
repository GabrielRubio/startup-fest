import { Component, OnInit, Input } from '@angular/core';
import { StarService } from '../../providers/star.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-star-review',
  templateUrl: './star-review.component.html',
  styleUrls: ['./star-review.component.scss']
})
export class StarReviewComponent implements OnInit {


  @Input() userId: string = '';
  @Input() startupName: string = '';
  @Input() criterion: string = '';
  @Input() title: string = '';

  stars: Observable<any[]>;
  rate: Observable<any>;
  avg: number;
  constructor(private starService: StarService) { }

  ngOnInit() {
    // handing user selected stars
    this.starService.getUserStars(this.userId, this.criterion, this.startupName).subscribe(doc => {
        this.rate = doc[0]['value'];
    });
   
    // handing average stars
    this.starService.getAverageStars(this.criterion, this.startupName).subscribe(
      doc => {
        const ratings = doc.map(v => v['value']);
        this.avg = ratings.length ? ratings.reduce((total, val) => total + val) / doc.length : 0;
      }
    );
  }

  // set user stars 
  starHandler(value) {
    this.starService.setStar(this.userId, this.startupName, this.criterion, value);
  }

}