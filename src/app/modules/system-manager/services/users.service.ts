import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getUserData(): Observable<any> {
    return this.http.get('assets/json/SystemManager/users.json');
  }
  getUserActData(): Observable<any> {
    return this.http.get('assets/json/SystemManager/userActivation.json');
  }
  getUserStatData(): Observable<any> {
    return this.http.get('assets/json/SystemManager/userStatus.json');
  }
  constructor(private http: HttpClient) { }
}
