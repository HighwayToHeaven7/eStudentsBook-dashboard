import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {EStudentsBookApiClientService} from "../../services/e-students-book-api-client.service";

@Component({
  selector: 'app-list-subject-student',
  templateUrl: './list-subject-student.component.html',
  styleUrls: ['./list-subject-student.component.css']
})
export class ListSubjectStudentComponent implements OnInit {
  newSubjectsList: any = {};
  public isCollapsed = false;

  constructor(private tokenStorageService: TokenStorageService,
              private apiClientService :EStudentsBookApiClientService) { }

  ngOnInit(): void {
    this.getListOfSubjectsAndStudents();
  }

  getListOfSubjectsAndStudents(): void {
    this.apiClientService.getSubjectsWithStudents().subscribe(newSubjects => {
      this.newSubjectsList = newSubjects;
    }, error => {
      this.logout();
    })
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.replace('');
  }

}
