import { Component, Input, OnInit } from '@angular/core';
import { Heading } from '../../shared/heading.model';

@Component({
  selector: 'app-product-detail-heading[heading]',
  templateUrl: './product-detail-heading.component.html',
  styleUrls: ['./product-detail-heading.component.scss']
})
export class ProductDetailHeadingComponent implements OnInit {
  @Input()
  heading: Heading;

  constructor() {
    this.heading = { title: '', subTitle: '' };
  }

  ngOnInit(): void {
  }

}
