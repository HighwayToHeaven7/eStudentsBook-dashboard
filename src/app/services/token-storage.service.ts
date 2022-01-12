import { Injectable } from '@angular/core';
import {AuthRequestDTO} from "../dto/AuthRequestDTO";

const TOKEN_KEY = "auth_token";
const USER_EMAIL = "user_email";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public signOut(): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
  }

  public saveToken(token: string, email: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    window.sessionStorage.removeItem(USER_EMAIL);
    window.sessionStorage.setItem(USER_EMAIL, email);
  }

  public getToken() {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public getUserEmail(){
    return window.sessionStorage.getItem(USER_EMAIL);
  }

  public isLogged() {
    return !!sessionStorage.getItem(TOKEN_KEY);
  }
}
