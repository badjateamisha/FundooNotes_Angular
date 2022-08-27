import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TakenoteComponent } from './components/takenote/takenote.component';

const routes: Routes = [
  {path:'register', component: RegisterComponent },
   {path:'login',component: LoginComponent },
   {path:'forgot',component: ForgotpasswordComponent },
   {path:'reset',component: ResetpasswordComponent },
   {path:'dashboard',component:DashboardComponent},
    {path:'takenote',component:TakenoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
