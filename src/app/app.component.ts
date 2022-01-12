import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "./services/token-storage.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLoggedIn = false;
  //showDashboard = false;
  tokenName: any = "sads";
  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      //this.router.navigate(['/dashboard']);
    }else{
      this.router.navigate(['/login']);
    }
  }

  getUserName(): string {
    this.tokenName = this.tokenStorageService.getUserEmail();
    return this.tokenName;
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.replace('');
    window.location.reload();
  }
}
