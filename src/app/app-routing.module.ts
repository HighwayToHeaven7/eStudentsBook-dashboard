import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ListOfStudentsComponent} from "./components/list-of-students/list-of-students.component";
import {AppComponent} from "./app.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {ListOfProfessorsComponent} from "./components/list-of-professors/list-of-professors.component";
import {ListSubjectStudentComponent} from "./components/list-subject-student/list-subject-student.component";
import {NewSubjectCardComponent} from "./components/new-subject-card/new-subject-card.component";
import {AddGradeComponent} from "./components/add-grade/add-grade.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent /*canActivate:[AppComponent]*/},
  { path: 'list-of-students', component: ListOfStudentsComponent /*canActivate:[isLogged()]*/},
  { path: 'list-of-professors', component: ListOfProfessorsComponent /*canActivate:[isLogged()]*/},
  { path: 'list-subject-student', component: ListSubjectStudentComponent /*canActivate:[isLogged()]*/},
  { path: 'new-subject-card', component: NewSubjectCardComponent /*canActivate:[isLogged()]*/},
  { path: 'add-grade', component: AddGradeComponent /*canActivate:[isLogged()]*/},
  { path: 'logout', component: LogoutComponent}
]

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
