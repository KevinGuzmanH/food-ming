import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RatingModule} from 'primeng/rating';
import {GMapModule} from 'primeng/gmap';
import {CardModule} from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { OrderComponent } from './component/order/order.component';
import { FooterComponent } from './component/footer/footer.component';
import { LocationComponent } from './component/location/location.component';
import { MenuComponent } from './component/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OrderComponent,
    FooterComponent,
    LocationComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    RatingModule,
    FormsModule,
    GMapModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
