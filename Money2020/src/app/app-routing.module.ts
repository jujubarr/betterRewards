import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CardSelectComponent } from './card-select/card-select.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
        children: []
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent,
        children: []
    },
    {
        path: 'signup',
        pathMatch: 'full',
        component: SignupComponent,
        children: []
    },
    {
        path: 'card-select',
        pathMatch: 'full',
        component: CardSelectComponent,
        children: []
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: DashboardComponent,
        children: []
    },
    {
        path: '**',
        pathMatch: 'full',
        component: ErrorComponent,
        children: []
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
