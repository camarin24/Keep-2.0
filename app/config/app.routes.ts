import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KeepComponent } from '../components/app.keep.component'
import {LoginComponent } from '../components/app.login.component'
import { LoggedInGuard } from '../config/app.userAuth'

// Route Configuration
export const routes: Routes = [
  { path: '', component: KeepComponent,canActivate:[LoggedInGuard] },
  { path: 'Login', component: LoginComponent,pathMatch:'full' }
];
/*
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, */
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);