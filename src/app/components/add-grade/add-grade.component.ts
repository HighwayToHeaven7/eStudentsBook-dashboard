import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {EStudentsBookApiClientService} from "../../services/e-students-book-api-client.service";
import {waitForAsync} from "@angular/core/testing";

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

  getListOfSubjectsAndStudents(): void {
    this.apiClientService.getSubjectsWithStudents().subscribe(newSubjects => {
      this.newSubjectsList = newSubjects;
      console.log(this.newSubjectsList.subjects[0].students[0])
      console.log(this.newSubjectsList.subjects[0].subjectName);
    }, error => {
      this.logout();
    })
  }

  whatSubjectSelected($event: any): void {
    console.log($event.target.options.selectedIndex);
    this.whatSubject = $event.target.options.selectedIndex;
    this.subjectWait = true;
  }

  whatGradeTypeSelected($event: any): void {

    let gradeType = $event.target.options[$event.target.options.selectedIndex].text;
    switch(gradeType) {
      case "LETTER": {
        this.letterType = true;
        this.numericType = false;
        this.percentageType = false;
        this.typeIsSelected = true;
        console.log($event.target.options[$event.target.options.selectedIndex].text);
        break;
      }
      case "NUMERIC": {
        this.letterType = false;
        this.numericType = true;
        this.percentageType = false;
        this.typeIsSelected = true;
        console.log($event.target.options[$event.target.options.selectedIndex].text);
        break;
      }
      case "PERCENTAGE": {
        this.letterType = false;
        this.numericType = false;
        this.percentageType = true;
        this.typeIsSelected = true;
        console.log($event.target.options[$event.target.options.selectedIndex].text);
        break;
      }
      default: {
        break;
      }
    }
    //this.whatSubject = $event.target.options.selectedIndex;
  }

  addGrade(): void {
    console.log(this.addGradeForm);
    this.apiClientService.postNewGrade(this.addGradeForm).subscribe(addGrade => {
      console.log(addGrade.toString());
    }, error => {
      console.log("error: addGrade()");
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
