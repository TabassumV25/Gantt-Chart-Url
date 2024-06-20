import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const AUTH_STORAGE_KEY = 'isLoggedIn';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStatusChanged = new Subject<boolean>();
  loginStatusChanged$ = this.loginStatusChanged.asObservable();

  private loggedIn = false;

  isLoggedIn(): boolean {  
    console.log('log servcice');
  
    return localStorage.getItem(AUTH_STORAGE_KEY) === 'false';
  }

  updateLoginStatus(status: boolean) {
    this.loggedIn = status;
    this.loginStatusChanged.next(this.loggedIn);
  }

  
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    //return this.http.post(`${this.baseUrl}/login`, { username, password });
    const isValid = username === 'admin' && password === 'admin123';

    if (isValid) {
      localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      this.updateLoginStatus(true);
    }

    return isValid;
  }

  logout() {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    this.updateLoginStatus(false);
  }
  
}
