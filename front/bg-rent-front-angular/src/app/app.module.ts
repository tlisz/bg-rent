import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentGameComponent } from './rent/rent-game/rent-game.component';
import { RentComponent } from './rent/rent/rent.component';
import { ReturnGameComponent } from './return/return-game/return-game.component';
import { ReturnComponent } from './return/return/return.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RentComponent,
    RentGameComponent,
    ReturnComponent,
    ReturnGameComponent,
    HomeComponent,
    MainNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
