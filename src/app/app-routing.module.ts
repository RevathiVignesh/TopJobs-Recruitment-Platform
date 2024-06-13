import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JshomeComponent } from './jobseeker/jshome/jshome.component';
import { JsregComponent } from './jobseeker/jsreg/jsreg.component';
import { EmphomeComponent } from './employer/emphome/emphome.component';
import { EmpregComponent } from './employer/empreg/empreg.component';
import { MainpageComponent } from './employer/mainpage/mainpage.component';
import { JobformComponent } from './employer/jobform/jobform.component';
import { JobmainComponent } from './jobseeker/jobmain/jobmain.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'jobseeker/jshome',component:JshomeComponent},
  {path:'jsreg',component:JsregComponent},
  {path:'employer/emphome',component:EmphomeComponent},
  {path:'empreg',component:EmpregComponent},
  {path:'empmain/:empemail',component:MainpageComponent},
  {path:'jobform',component:JobformComponent},
  {path:'jobform/:empid',component:JobformComponent},
  {path:'empmain',component:EmphomeComponent},
  {path:'jsmain/:jsemail',component:JobmainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
