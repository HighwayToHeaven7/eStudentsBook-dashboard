import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {EStudentsBookApiClientService} from "../../services/e-students-book-api-client.service";
import {AuthRequestDTO} from "../../dto/AuthRequestDTO";

@Component({
  selector: 'app-list-of-professors',
  templateUrl: './list-of-professors.component.html',
  styleUrls: ['./list-of-professors.component.css']
})
export class ListOfProfessorsComponent implements OnInit {
  newProfessorsList: any = {};
  tokenName: any = "asas";

  constructor(private tokenStorageService: TokenStorageService,
              private apiClientService :EStudentsBookApiClientService) { }

  ngOnInit(): void {
      this.getListOfProfessors();
  }

  getListOfProfessors(): void {
    this.apiClientService.getAllProfessors().subscribe(newProfessors => {
      this.newProfessorsList = newProfessors;
    }, error => {
      this.logout();
    })
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.replace('');
  }

}
