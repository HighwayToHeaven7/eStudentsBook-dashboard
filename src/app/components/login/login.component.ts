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

  constructor(private router: Router, private authService: AuthService,
              private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.loginStatus = true;
      if(this.tokenStorageService.getUserType() === "admin"){
        this.router.navigate(['dashboard']);
      }
      else if(this.tokenStorageService.getUserType() === "profesor"){
        this.router.navigate(['list-subject-student']);
      }

    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(data => {
      this.tokenStorageService.saveToken(data.token, data.email);

      this.loginFailed = false;
      this.loginStatus = true;
    }, error => {
      this.loginFailed = true;
    });


  }
}


