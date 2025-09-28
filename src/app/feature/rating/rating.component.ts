import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;
  @Input() readonly: boolean = false;
  @Input() max: number = 5;
  @Input() showRating: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
