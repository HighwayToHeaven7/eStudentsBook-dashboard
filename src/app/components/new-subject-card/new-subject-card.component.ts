import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {EStudentsBookApiClientService} from "../../services/e-students-book-api-client.service";

@Component({
  selector: 'app-new-subject-card',
  templateUrl: './new-subject-card.component.html',
  styleUrls: ['./new-subject-card.component.css']
})
export class NewSubjectCardComponent implements OnInit {
  newStudentsList: any = {};
  newSubjectsList: any = {};
  newSubjectCardForm: any = {};

  constructor(private tokenStorageService: TokenStorageService, private apiClientService :EStudentsBookApiClientService) { }


  ngOnInit(): void {
    this.getListOfSubjects();
    this.getListOfStudents();
  }

  getListOfStudents(): void {
    this.apiClientService.getAllStudents().subscribe(newStudents => {
      this.newStudentsList = newStudents;
      console.log(newStudents);
    }, error => {
     // this.logout();
    })
  }

  getListOfSubjects(): void {
    this.apiClientService.getAllSubjects().subscribe(newSubjects => {
      this.newSubjectsList = newSubjects;
      console.log(newSubjects);
    }, error => {
      this.logout();
    })
  }

  createNewSubjectCard(): void {
    console.log(this.newSubjectCardForm);
    this.apiClientService.postNewSubjectCard(this.newSubjectCardForm).subscribe(newSubjectCard => {
      console.log(newSubjectCard.toString());
    }, error => {
      console.log("error: createNewSubjectCard()");
      //this.logout();
      console.log(error);
      alert('Nie udało się :( - proszę o kontakt z administratorem bazy danych');
      window.location.reload();
    });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.replace('');
  }

}
