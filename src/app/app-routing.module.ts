import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) }, 
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }, 
  // { path: 'country-details/:id', loadChildren: () => import('./components/countries/countries-details/countries-details.module').then(m => m.CountriesDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
