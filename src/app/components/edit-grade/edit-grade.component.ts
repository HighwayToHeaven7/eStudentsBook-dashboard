import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {EStudentsBookApiClientService} from "../../services/e-students-book-api-client.service";

@Component({
  selector: 'app-edit-grade',
  templateUrl: './edit-grade.component.html',
  styleUrls: ['./edit-grade.component.css']
})
export class EditGradeComponent implements OnInit {
  newSubjectsList: any = {};
  newGradesList: any = {};
  editGradeForm: any = {};
  whatSubject: any = 0;
  whatGrade: any = 0;
  studentID: any = 0;
  subjectID: any = 0;
  subjectWait: boolean = false;
  studentWait: boolean = false;
  letterType: boolean = false;
  numericType: boolean = false;
  percentageType: boolean = false;
  typeIsSelected: boolean = false;
  gradeTypeArray: any = ["LETTER", "NUMERIC", "PERCENTAGE" ];
  letterGrade: any = ["celujący", "-celujący", "+bardzo dobry", "bardzo dobry", "-bardzo dobry", "+dobry",
    "dobry", "-dobry", "+dostateczny", "dostateczny", "-dostateczny", "+dopuszczający",
    "dopuszczający", "-dopuszczający", "+niedostateczny", "niedostateczny"];
  numericGrade: any = ["6", "-6", "+5", "5", "-5", "+4", "4", "-4", "+3", "3", "-3", "+2", "2", "-2", "+1", "1"];
  percentageGrade: any = ["100%", "95%", "90%", "85%", "80%", "75%", "70%", "65%", "60%",
    "55%", "50%", "45%", "40%", "35%", "30%", "0%"];

  constructor(private tokenStorageService: TokenStorageService, private apiClientService :EStudentsBookApiClientService) { }

  ngOnInit(): void {
    this.getListOfSubjectsAndStudents();
  }

  getListOfSubjectsAndStudents(): any {
    this.apiClientService.getSubjectsWithStudents().subscribe(newSubjects => {
      this.newSubjectsList = newSubjects;
      return this.newSubjectsList;
    }, error => {
      this.logout();
    })
  }

  getStudentsGrades(endpoint: any): any {
    this.apiClientService.getStudentsGrades(endpoint).subscribe(newGrades => {
      this.newGradesList = newGrades[0];
      return this.newGradesList;
    }, error => {
      this.logout();
    })
  }

  whatSubjectSelected($event: any): void {
    this.whatSubject = $event.target.options.selectedIndex;
    this.subjectID = $event.target.options[$event.target.options.selectedIndex].value;
    this.subjectWait = true;
  }

  whatGradeSelected($event: any): void {
    if (this.whatGrade != 0) {
      document.querySelector("li.active")!.setAttribute(
        "class",
        "list-group-item list-group-item-action d-flex justify-content-between lh-condensed"
      );
    }
    this.whatGrade = $event.target.id;
    $event.target.setAttribute(
      "class",
      "list-group-item list-group-item-action d-flex justify-content-between lh-condensed active"
    );
  }


  whatStudentSelected($event: any): void {
    this.studentID = $event.target.options[$event.target.options.selectedIndex].value;
    let endpoint = "users/students/"+this.studentID+"/subjects/"+this.subjectID;
    this.getStudentsGrades(endpoint.toString());
    this.studentWait = true;
  }

  whatGradeTypeSelected($event: any): void {
    let gradeType = $event.target.options[$event.target.options.selectedIndex].value;
    switch(gradeType) {
      case "LETTER": {
        this.letterType = true;
        this.numericType = false;
        this.percentageType = false;
        this.typeIsSelected = true;
        break;
      }
      case "NUMERIC": {
        this.letterType = false;
        this.numericType = true;
        this.percentageType = false;
        this.typeIsSelected = true;
        break;
      }
      case "PERCENTAGE": {
        this.letterType = false;
        this.numericType = false;
        this.percentageType = true;
        this.typeIsSelected = true;
        break;
      }
      default: {
        break;
      }
    }
  }

  editGrade(): void {
    this.apiClientService.editGrade(this.editGradeForm, this.whatGrade).subscribe(editGrade => {
    }, error => {
      alert('Nie udało się :( - proszę o kontakt z administratorem bazy danych');
      window.location.reload();
    });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.replace('');
  }
}
