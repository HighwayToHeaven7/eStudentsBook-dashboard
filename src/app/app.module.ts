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
import { ListSubjectStudentComponent } from './components/list-subject-student/list-subject-student.component';
import { NewSubjectCardComponent } from './components/new-subject-card/new-subject-card.component';
import { AddGradeComponent } from './components/add-grade/add-grade.component';
import { EditGradeComponent } from './components/edit-grade/edit-grade.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ListOfStudentsComponent,
    LogoutComponent,
    ListOfProfessorsComponent,
    ListSubjectStudentComponent,
    NewSubjectCardComponent,
    AddGradeComponent,
    EditGradeComponent
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
