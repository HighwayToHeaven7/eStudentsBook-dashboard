import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {EStudentsBookApiClientService} from "../../services/e-students-book-api-client.service";

@Component({
  selector: 'app-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.css']
})
export class ListOfStudentsComponent implements OnInit {
  newStudentsList: any = {};
  constructor(private tokenStorageService: TokenStorageService, private apiClientService :EStudentsBookApiClientService) {
  }
  ngOnInit(): void {
    this.getListOfStudents();
  }

  getListOfStudents(): void {
    this.apiClientService.getAllStudents().subscribe(newStudents => {
      this.newStudentsList = newStudents;
    }, error => {
      this.logout();
    })
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.replace('');
    window.location.reload();
  }
}
