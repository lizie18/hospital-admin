import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styles: [],
})
export class ChartsComponent implements OnInit {
  charts = {
    chart1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data: [24, 30, 46],
      type: 'doughnut',
      legend: 'El pan se come con:',
    },
    chart2: {
      labels: ['Hombres', 'Mujeres'],
      data: [4500, 6000],
      type: 'doughnut',
      legend: 'Entrevistados',
    },
    chart3: {
      labels: ['Si', 'No'],
      data: [95, 5],
      type: 'doughnut',
      legend: '¿Le dan gases los frijoles?',
    },
    chart4: {
      labels: ['No', 'Si'],
      data: [85, 15],
      type: 'doughnut',
      legend: '¿Le importa que le den gases?',
    },
  };
  dataChart1 = this.charts.chart1.data;
  labelChart1 = this.charts.chart1.labels;
  typeChart1 = this.charts.chart1.type;
  legendChart1 = this.charts.chart1.legend;

  dataChart2 = this.charts.chart2.data;
  labelChart2 = this.charts.chart2.labels;
  typeChart2 = this.charts.chart2.type;
  legendChart2 = this.charts.chart2.legend;

  dataChart3 = this.charts.chart3.data;
  labelChart3 = this.charts.chart3.labels;
  typeChart3 = this.charts.chart3.type;
  legendChart3 = this.charts.chart3.legend;

  dataChart4 = this.charts.chart4.data;
  labelChart4 = this.charts.chart4.labels;
  typeChart4 = this.charts.chart4.type;
  legendChart4 = this.charts.chart4.legend;

  constructor() {}

  ngOnInit() {}

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
