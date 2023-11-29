import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ChartComponent implements OnInit {
  public chart: any;
  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'ديسمبر',
          'نوفمبر',
          'أكتوبر',
          'سبتمبر',
          'أغسطس',
          'يوليو',
          'يونيو',
          'مايو',
          'ابريل',
          'مارس',
          'فبراير',
          'يناير',
        ],
        yLabels: [],

        datasets: [
          {
            label: 'إستخدام',
            pointHoverRadius: 10,
            data: [
              '467',
              '576',
              '572',
              '79',
              '92',
              '574',
              '573',
              '576',
              '420',
              '79',
              '92',
              '574',
            ],
            backgroundColor: '#8A74F9',
            borderColor: '#8A74F9',
            hoverBorderJoinStyle: 'round',
            tension: 0.4,
          },
        ],
      },

      options: {
        aspectRatio: 5.0,

        responsive: true,
        transitions: {
          show: {
            animations: {
              x: {
                from: 0,
              },
              y: {
                from: 0,
              },
            },
          },
        },
      },
    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}
