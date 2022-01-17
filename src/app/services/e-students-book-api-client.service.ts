import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewUserRequestDTO} from "../dto/NewUserRequestDTO";
import {TokenStorageService} from "./token-storage.service";
import {NewSubjectCardDTO} from "../dto/NewSubjectCardDTO";
import {NewGradeDTO} from "../dto/NewGradeDTO";

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class EStudentsBookApiClientService {

  constructor(private httpClient: HttpClient, private tokenStorageService: TokenStorageService) { }

  getAllStudents(): Observable<any> {
    return this.httpClient.get(API_URL + 'users/students/all', {responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + this.tokenStorageService.getToken()
      })}
    );
  }

  getAllProfessors(): Observable<any> {
    return this.httpClient.get(API_URL + 'users/professors/all', {responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + this.tokenStorageService.getToken()
      })}
    );
  }

  getAllSubjects(): Observable<any> {
    return this.httpClient.get(API_URL + 'subjects/all', {responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + this.tokenStorageService.getToken()
      })}
    );
  }

  getSubjectsWithStudents(): Observable<any>{
    return this.httpClient.get(API_URL + 'users/professors', {responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + this.tokenStorageService.getToken()
      })}
    );
  }

  postNewUser(newUser: NewUserRequestDTO): Observable<any> {

    return this.httpClient.post(API_URL + 'users', newUser, {responseType: 'json',
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ` + this.tokenStorageService.getToken()
        })}
    );
  }

  postNewSubjectCard(newSubjectCard: NewSubjectCardDTO): Observable<any> {

    return this.httpClient.post(API_URL + 'subject-cards', newSubjectCard, {responseType: 'json',
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ` + this.tokenStorageService.getToken()
        })}
    );
  }

  postNewGrade(newGrade: NewGradeDTO): Observable<any> {

    return this.httpClient.post(API_URL + 'users/students/grades', newGrade, {responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + this.tokenStorageService.getToken()
      })}
    );
  }

}
