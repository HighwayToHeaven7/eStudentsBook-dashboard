import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {EStudentsBookApiClientService} from "../../services/e-students-book-api-client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  newUserForm: any = {};
  isLoggedIn: any = false;

  constructor(private tokenStorageService: TokenStorageService, private apiClientService :EStudentsBookApiClientService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (!this.isLoggedIn || this.tokenStorageService.getUserType() === "profesor") {
      this.router.navigate(['/login']);
    }
  }

  createNewUser(): void {
    this.apiClientService.postNewUser(this.newUserForm).subscribe(newUser => {
      console.log(newUser.toString());
    }, error => {
      console.log("error: createNewUser()");
      this.logout();
    });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.replace('');
  }
}
