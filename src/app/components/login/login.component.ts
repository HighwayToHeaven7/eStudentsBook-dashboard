import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};

  loginStatus: boolean = false;
  loginFailed: boolean = false;

  constructor(private router: Router, private authService: AuthService, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.loginStatus = true;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(data => {
      this.tokenStorageService.saveToken(data.token);
      this.loginFailed = false;
      this.loginStatus = true;
    }, error => {
      this.loginFailed = true;
    });
  }
}


