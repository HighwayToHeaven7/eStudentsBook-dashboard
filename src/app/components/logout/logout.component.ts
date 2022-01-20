import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {EStudentsBookApiClientService} from "../../services/e-students-book-api-client.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {window} from "rxjs";
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _authService: TokenStorageService, private router: Router) {}

  ngOnInit(): void {
    if(this._authService.getToken() != null){
      location.reload();
    }
    this._authService.signOut();
    this.router.navigate(['login']);
  }

}
