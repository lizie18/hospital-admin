import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {
  progressBarA: number = 10;
  progressBarB: number = 20;
  constructor() { }

  ngOnInit(): void {
  }

}
