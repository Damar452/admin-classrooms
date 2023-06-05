import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle-box',
  templateUrl: './subtitle-box.component.html',
  styleUrls: ['./subtitle-box.component.scss']
})
export class SubtitleBoxComponent {

  @Input() subtitle: string = '';
  @Input() route: string = '';

}
