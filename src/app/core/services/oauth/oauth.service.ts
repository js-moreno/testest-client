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

  get_access_token(form: any): Observable<any> {
    return this.http.post<any>(`${this.URL}o/token/`, form, this.urlHeader);
  }
}
