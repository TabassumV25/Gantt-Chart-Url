import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewRoleService {
  constructor(private http: HttpClient) { }
  getnewRoleData(): Observable<any> {
    return this.http.get('assets/json/SystemManager/newRole.json');
  }
  
}
