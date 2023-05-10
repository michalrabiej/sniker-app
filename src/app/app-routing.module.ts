import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnikerListComponent } from './components/sniker-list/sniker-list.component';

const routes: Routes = [
  {path: 'snikers', component: SnikerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
