import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TakenoteComponent } from './components/takenote/takenote.component';
import { GetallnoteComponent } from './components/getallnote/getallnote.component';

const routes: Routes = [
  {path:'register', component: RegisterComponent },
   {path:'login',component: LoginComponent },
   {path:'forgot',component: ForgotpasswordComponent },
   {path:'reset',component: ResetpasswordComponent },
   {path:'dashboard',component:DashboardComponent,
   children:[
    // {path:'', redirectTo:"/dashboard/takenote", pathMatch:'full' },
    // {path:'takenote',component:TakenoteComponent}
    {path:'', redirectTo:"/dashboard/notes", pathMatch:'full' },
    {path:'notes',component:GetallnoteComponent}
]},
{path:'takenote',component:TakenoteComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
