import { Injectable } from '@angular/core';

const TOKEN_KEY = "auth_token";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public signOut(): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken() {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public isLogged() {
    return !!sessionStorage.getItem(TOKEN_KEY);
  }
}
