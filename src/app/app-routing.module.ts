import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { TabsComponent } from './tabs/tabs.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'tabs',component:TabsComponent},
  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
