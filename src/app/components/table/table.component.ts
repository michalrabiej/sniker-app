import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Sniker } from 'src/app/models/sniker';
import { SnikerService } from 'src/app/services/sniker.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableBasicExample {
  displayedColumns: string[] = ['id', 'name', 'brand', 'model'];
  dataSource = [{
    id:1,
    name:'Adidas Ultraboost',
    brand:'Adidas',
    model:'Ultraboost'
  }];
}


