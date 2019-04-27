import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-review',
  templateUrl: './star-review.component.html',
  styleUrls: ['./star-review.component.scss']
})
export class StarReviewComponent implements OnInit {

  rate: 3.5;
  @Input() title: string = 'Critério';
  constructor() { }

  ngOnInit() {
  }

}
