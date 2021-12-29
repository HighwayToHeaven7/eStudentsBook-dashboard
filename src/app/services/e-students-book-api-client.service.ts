import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewUserRequestDTO} from "../dto/NewUserRequestDTO";
import {TokenStorageService} from "./token-storage.service";

const API_URL = 'http://localhost:8080/users';

@Injectable({
  providedIn: 'root'
})
export class EStudentsBookApiClientService {

  constructor(private httpClient: HttpClient, private tokenStorageService: TokenStorageService) { }

  getNewUsers(): Observable<any> {
    return this.httpClient.get(API_URL + '/new', {responseType: 'json',
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    );
  }

  postNewUser(newUser: NewUserRequestDTO): Observable<any> {

    return this.httpClient.post(API_URL, newUser, {responseType: 'json',
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ` + this.tokenStorageService.getToken()
        })}
    );
  }

}
