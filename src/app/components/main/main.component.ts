import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [CommonModule, ChartComponent],
})
export class MainComponent {
  repeatArray(arg0: number): any {
    return new Array(arg0);
  }
}
