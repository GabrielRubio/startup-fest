import { Component, OnInit, Input } from '@angular/core';
import { StarService } from '../../providers/star.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionService } from 'src/app/providers/session.service';

@Component({
  selector: 'app-star-review',
  templateUrl: './star-review.component.html',
  styleUrls: ['./star-review.component.scss']
})
export class StarReviewComponent implements OnInit {

  @Input() startupName: string = '';
  @Input() criterion: string = '';
  @Input() title: string = '';
  @Input() isAverage: boolean = false;
  @Input() readOnly: boolean = false;
  
  stars: Observable<any[]>;
  rate: number;
  avg: number;
  userId: string = this.session.getUserId();

  constructor(private starService: StarService, public session:SessionService) { }
  
  ngOnInit() {
    // picking user selected stars
    this.starService.getUserStars(this.userId, this.criterion, this.startupName).subscribe(doc => {
        this.rate = doc[0]['value'];
    });
   
    if(this.isAverage){
      // picking average stars
      this.starService.getAverageStars(this.criterion, this.startupName).subscribe(
        doc => {
          const ratings = doc.map(v => v['value']);
          this.avg = ratings.length ? ratings.reduce((total, val) => total + val) / doc.length : 0;
          //and set rate such a avg
          this.rate = this.avg;
        }
      );
    }
  }

  // set user stars 
  starHandler(value) {
    this.starService.setStar(this.userId, this.startupName, this.criterion, value);
  }

}