import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [
  ]
})
export class IncreaserComponent implements OnInit {
  @ViewChild('inputProgress') inputProgress: ElementRef;
  @Input() progress: number = 50;
  @Input() legend: string = '';
  @Output() updateValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value) {
    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0;
    }
    this.inputProgress.nativeElement.value = this.progress;
    this.updateValue.emit(this.progress);
  }

  changeValueBtn(value) {
    const progress = this.progress;
    if (progress >= 100 && value > 0) {
      return;
    }
    if (progress <= 0 && value < 0) {
      return;
    }
    this.progress += value;
    this.inputProgress.nativeElement.focus();
    this.updateValue.emit(this.progress);
  }

}
