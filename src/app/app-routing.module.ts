import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: '', component: HomeComponent, outlet: 'primary', pathMatch: 'prefix' },
  { path: 'items', component: ItemsComponent, outlet: 'primary', pathMatch: 'prefix' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
