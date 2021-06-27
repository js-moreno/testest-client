import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OauthService {
  urlHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  private URL = environment.serverURL;

  constructor(private http: HttpClient) {}

  requestAccessToken(form: any): Observable<any> {
    return this.http.post<any>(`${this.URL}o/token/`, form, this.urlHeader);
  }

  requestRevokeToken(form: any): Observable<any> {
    return this.http.post<any>(
      `${this.URL}o/revoke_token/`,
      form,
      this.urlHeader
    );
  }

  getAccessToken(): any {
    return localStorage.getItem('access_token');
  }

  hasToken(): any {
    let token = this.getAccessToken();
    return token != null;
  }

  deleteAccessToken(): any {
    localStorage.clear();
    return true;
  }
}
