import { Component, Input } from '@angular/core';
import { Sniker } from 'src/app/models/sniker';

@Component({
  selector: 'app-sniker-detail',
  templateUrl: './sniker-detail.component.html',
  styleUrls: ['./sniker-detail.component.css']
})
export class SnikerDetailComponent {

  @Input() sniker?: Sniker;

}
