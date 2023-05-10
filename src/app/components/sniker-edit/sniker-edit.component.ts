import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sniker } from 'src/app/models/sniker';
import { SnikerService } from 'src/app/services/sniker.service';

@Component({
  selector: 'app-sniker-edit',
  templateUrl: './sniker-edit.component.html',
  styleUrls: ['./sniker-edit.component.css']
})
export class SnikerEditComponent implements OnInit {

  @Input() sniker?: Sniker;
  @Output() snikersUpdated = new EventEmitter<Sniker[]>();

  constructor(public snikerService: SnikerService) { }

  ngOnInit(): void {
  }

  updateSniker(sniker:Sniker){
    this.snikerService
    .updateSniker(sniker)
    .subscribe((snikers: Sniker[])=> this.snikersUpdated.emit(snikers))
  }

  deleteSniker(sniker:Sniker){
    this.snikerService
    .deleteSniker(sniker)
    .subscribe((snikers: Sniker[])=> this.snikersUpdated.emit(snikers))
  }

  createSniker(sniker:Sniker){
    this.snikerService
    .createSniker(sniker)
    .subscribe((snikers: Sniker[])=> this.snikersUpdated.emit(snikers))
  }

  addToTable(){

  }
  // addToTable(but: ISniker) {
  //   Snikers.push(but);
  //   this.dataSource = new MatTableDataSource<ISniker>(Snikers);
  // }

}
