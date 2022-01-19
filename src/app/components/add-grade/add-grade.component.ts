import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {EStudentsBookApiClientService} from "../../services/e-students-book-api-client.service";

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})
export class AddGradeComponent implements OnInit {
  newSubjectsList: any = {};
  addGradeForm: any = {};
  whatSubject: any = 0;
  subjectWait: boolean = false;
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

  constructor(private tokenStorageService: TokenStorageService,
              private apiClientService :EStudentsBookApiClientService) { }

  ngOnInit(): void {
    this.getListOfSubjectsAndStudents();
  }

  getListOfSubjectsAndStudents(): any {
    this.apiClientService.getSubjectsWithStudents().subscribe(newSubjects => {
      this.newSubjectsList = newSubjects;
      console.log(this.newSubjectsList.subjects[0].students[0])
      console.log(this.newSubjectsList.subjects[0].subjectName);
      return this.newSubjectsList;
    }, error => {
      this.logout();
    })
  }

  whatSubjectSelected($event: any): void {
    this.whatSubject = $event.target.options.selectedIndex;
    this.subjectWait = true;
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

  addGrade(): void {
    this.apiClientService.postNewGrade(this.addGradeForm).subscribe(addGrade => {
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
