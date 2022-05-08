import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationModel } from '../Models/RegistrationModel';
import { LoginModel } from '../Models/LoginModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly ApiURL = "http://localhost:62733/api/";
  constructor(private http: HttpClient) { }

  register(data: RegistrationModel) {
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };
    this.http.post<RegistrationModel>(this.ApiURL + '/InsertOFOSpecializationAsync/Insert', data, { headers }).subscribe(result => {
        console.log(result)

        if(result){
          window.location.href = '/login'
        }
    });
  }

  login(data: LoginModel) {
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };
    this.http.post<LoginModel>(this.ApiURL + '/InsertOFOSpecializationAsync/Insert', data, { headers }).subscribe(result => {
        console.log(result)

        if(result){
          window.location.href = '/'
        }
    });
  }
}