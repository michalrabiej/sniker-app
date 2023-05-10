import { Component } from '@angular/core';
import { Sniker } from './models/sniker';
import { SnikerService } from './services/sniker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SnikerApp';
  shoes: Sniker[] = [];
  snikerToEdit?: Sniker;
  
  constructor(private snikerService: SnikerService){}

  ngOnInit(): void{
   this.snikerService
   .getShoes()
   .subscribe((result: Sniker[])=>(this.shoes = result));
  }

  public initNewSniker(){
    this.snikerToEdit = new Sniker();
    this.snikerService.showEditForm = !this.snikerService.showEditForm;
  }

}
