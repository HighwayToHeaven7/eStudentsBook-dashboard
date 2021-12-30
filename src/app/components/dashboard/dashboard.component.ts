import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {EStudentsBookApiClientService} from "../../services/e-students-book-api-client.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  newUserForm: any = {};
  newUsersList: any = {};

  constructor(private tokenStorageService: TokenStorageService, private apiClientService :EStudentsBookApiClientService) {
  }

  ngOnInit(): void {
  }

  createNewUser(): void {
    this.apiClientService.postNewUser(this.newUserForm).subscribe(newUser => {
      console.log(newUser.toString());
    }, error => {
      console.log("error: createNewUser()");
      this.logout();
    });
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
