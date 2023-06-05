import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analytics-card',
  templateUrl: './analytics-card.component.html',
  styleUrls: ['./analytics-card.component.scss']
})
export class AnalyticsCardComponent {

  @Input() value: number = 0;
  @Input() percentage: string = '0%';
  @Input() icon: string = '';
  @Input() color!: 'primary' | 'secondary';
  @Input() description: string = '';
}
