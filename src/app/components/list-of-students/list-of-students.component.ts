import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {EStudentsBookApiClientService} from "../../services/e-students-book-api-client.service";

@Component({
  selector: 'app-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.css']
})
export class ListOfStudentsComponent implements OnInit {
  newUsersList: any = {};
  constructor(private tokenStorageService: TokenStorageService, private apiClientService :EStudentsBookApiClientService) {
  }
  ngOnInit(): void {
  }

  getListOfNewUsers(): void {
    this.apiClientService.getNewUsers().subscribe(newUsers => {
      this.newUsersList = newUsers;
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
