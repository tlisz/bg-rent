import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RentGameComponent } from './rent/rent-game/rent-game.component';
import { RentComponent } from './rent/rent/rent.component';
import { ReturnGameComponent } from './return/return-game/return-game.component';
import { ReturnComponent } from './return/return/return.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'rent',
    component: RentComponent,
  },
  {
    path: 'rent/:gameId',
    component: RentGameComponent,
  },
  {
    path: 'return',
    component: ReturnComponent,
  },
  {
    path: 'return/:gameId',
    component: ReturnGameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
