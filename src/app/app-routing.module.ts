import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { TakenoteComponent } from './components/takenote/takenote.component';
import { GetallnoteComponent } from './components/getallnote/getallnote.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  {path:'register', component: RegisterComponent },
   {path:'login',component: LoginComponent },
   {path:'forgot',component: ForgotpasswordComponent },
   {path:'reset',component: ResetpasswordComponent },
   {path:'dashboard',component:DashboardComponent,
   canActivate:[AuthguardGuard],
   children:[
    // {path:'', redirectTo:"/dashboard/takenote", pathMatch:'full' },
    // {path:'takenote',component:TakenoteComponent}
    {path:'', redirectTo:"/dashboard/notes", pathMatch:'full' },
    {path:'notes',component:GetallnoteComponent},
    {path:'trash',component:TrashComponent},
    {path:'archive',component:ArchiveComponent}
]},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
