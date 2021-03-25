import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { DefaultComponent } from './layout/default/default.component';
import { AddDetailsComponent } from './layout/add-details/add-details.component';

import { AdminComponent } from './pages/admin/admin.component';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { PieComponent } from './shared/components/pie/pie.component';


const routes: Routes = [

  { path: '', redirectTo: '/firstpage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'forgetpassword', component: ForgetpasswordComponent},
  { path: 'firstpage', component: FirstpageComponent},
  { path: 'userinfo', component: UserinfoComponent },
  { path: 'default', component: DefaultComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'pie', component: PieComponent},
  { path: 'sidebar', component: SidebarComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'add-details', component: AddDetailsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
