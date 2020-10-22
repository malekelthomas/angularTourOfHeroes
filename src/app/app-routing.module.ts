import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //routing functionality
import { HeroesComponent } from './heroes/heroes.component'; //provides router somewhere to go
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [ //where routes are configured
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component : DashboardComponent},
  { path: 'detail/:id', component : HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
