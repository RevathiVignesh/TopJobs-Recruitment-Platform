import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JshomeComponent } from './jobseeker/jshome/jshome.component';
import { JsregComponent } from './jobseeker/jsreg/jsreg.component';
import { EmphomeComponent } from './employer/emphome/emphome.component';
import { EmpregComponent } from './employer/empreg/empreg.component';
import { MainpageComponent } from './employer/mainpage/mainpage.component';
import { JobformComponent } from './employer/jobform/jobform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    JshomeComponent,
    JsregComponent,
    EmphomeComponent,
    EmpregComponent,
    MainpageComponent,
    JobformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
