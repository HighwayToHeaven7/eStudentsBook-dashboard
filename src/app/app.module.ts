import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { ListOfStudentsComponent } from './components/list-of-students/list-of-students.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ListOfProfessorsComponent } from './components/list-of-professors/list-of-professors.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ListOfStudentsComponent,
    LogoutComponent,
    ListOfProfessorsComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
