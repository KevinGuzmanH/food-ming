import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {OrderComponent} from "./component/order/order.component";
import {LocationComponent} from "./component/location/location.component";
import {MenuComponent} from "./component/menu/menu.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'order', component: OrderComponent},
  {path: 'location', component: LocationComponent},
  {path: 'menu', component: MenuComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
