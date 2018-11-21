import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundcarousel',
  templateUrl: './fundcarousel.component.html',
  styleUrls: ['./fundcarousel.component.css']
})
export class FundcarouselComponent implements OnInit {

  isCollasped : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleCollape() {
    this.isCollasped = !this.isCollasped;
  }
}
