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


  @Input() userId: string = 'teste';
  @Input() startupName: string = 'teste';
  @Input() criterion: string = 'teste';
  @Input() title: string = 'Critério';

  stars: Observable<any>;
  rate: any;

  constructor(private starService: StarService) { }

  ngOnInit() {
    console.log('entroou aqui 1');
    this.stars = this.starService.getCriterionStars(this.startupName, this.criterion);
    console.log('entroou aqui 2');
    console.log(this.stars);
    this.rate = this.stars.pipe(map(arr => {
      const ratings = arr.map(v => v.value)
      return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : 'not reviewed'
    }));
    console.log(this.rate);
  }

  starHandler(value) {
    this.starService.setStar(this.userId, this.startupName, this.criterion, value);
  }

}