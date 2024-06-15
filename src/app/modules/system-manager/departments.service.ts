import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }
  getDepartmentsData(): Observable<any> {
    return this.http.get('assets/json/SystemManager/departments.json');
  }
}
