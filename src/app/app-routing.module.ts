import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //routing functionality
import { HeroesComponent } from './heroes/heroes.component'; //provides router somewhere to go

const routes: Routes = [ //where routes are configured
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
