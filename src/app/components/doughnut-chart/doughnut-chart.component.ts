import { Component, OnInit, Input } from '@angular/core';

// Ng-Charts
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styles: [],
})
export class DoughnutChartComponent implements OnInit {
  @Input() chartData: MultiDataSet;
  @Input() chartLabels: Label;
  @Input() chartType: ChartType;
  constructor() {}

  ngOnInit(): void {}
}
