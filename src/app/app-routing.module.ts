import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guard/adminGuard';
import { Guard } from './guard/guard';
import { HomeComponent } from './home/home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent, canActivate:[AdminGuard] },
{ path: 'login', component: UserLoginComponent },
{ path: 'register', component: UserRegisterComponent },
{ path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
