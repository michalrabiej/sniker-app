import { Component, OnInit } from '@angular/core';
import { Sniker } from 'src/app/models/sniker';
import { SnikerService } from 'src/app/services/sniker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  snikers: Sniker[] = [];
  
  constructor(private snikerService: SnikerService) { }

  ngOnInit(): void {
    this.getSnikers();
  }

  getSnikers() {
    this.snikerService.getSnikers()
    .subscribe(snikers => this.snikers = snikers.slice(1, 5));
  }

}
