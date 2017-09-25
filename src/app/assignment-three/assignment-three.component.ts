import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {
  isShown = false;
  buttonClicksArray = [];

  constructor() { }

  ngOnInit() {
  }

  toggleParagraph() {
    this.isShown = !this.isShown;
    this.buttonClicksArray.push(new Date());
  }

  getBackgroundColor() {
    return this.buttonClicksArray.length >= 5 ? 'blue' : 'white';
  }
}
