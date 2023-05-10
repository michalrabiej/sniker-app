import { Component, OnInit } from '@angular/core';
import { Sniker } from 'src/app/models/sniker';
import { MessageService } from 'src/app/services/message.service';
import { SnikerService } from 'src/app/services/sniker.service';

@Component({
  selector: 'app-sniker-list',
  templateUrl: './sniker-list.component.html',
  styleUrls: ['./sniker-list.component.css']
})
export class SnikerListComponent implements OnInit {
   
  snikersList: Sniker[] = []
  selectedSniker?: Sniker;
  
  constructor(private snikerService: SnikerService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getSnikers();
  }

  displayedColumns: string[] = ['id', 'name', 'brand', 'model'];
 
  onSelect(sniker: Sniker): void {
  this.selectedSniker = sniker;
  this.messageService.add(`SnikerList Component: Selected sniker name = ${sniker.name}`)
  }

  getSnikers(): void{
    this.snikerService.getSnikers()
    .subscribe(snikers => this.snikersList = snikers);
  }
}
