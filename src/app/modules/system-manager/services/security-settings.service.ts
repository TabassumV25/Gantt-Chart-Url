import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SecuritySettings } from 'src/app/models/securitySettings.model';


@Injectable({
  providedIn: 'root'
})
export class SecuritySettingsService {
  private apiUrl = 'your-api-url/security-settings'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getSecuritySettings(): Observable<SecuritySettings> {
    return this.http.get<SecuritySettings>(this.apiUrl);
  }

  updateSecuritySettings(settings: SecuritySettings): Observable<SecuritySettings> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<SecuritySettings>(this.apiUrl, settings, { headers });
  }
  
}
