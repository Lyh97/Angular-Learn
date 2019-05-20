import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YhComponent } from './core/Lyh/yh.component';
import { Login } from './core/Login/login'
import { StoreComponent } from './core/StoreTest/storeTest'

const routes: Routes = [
  { path: 'yhDashboard', component: YhComponent },
  { path: 'login', component: Login },
  { path: 'store', component: StoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
