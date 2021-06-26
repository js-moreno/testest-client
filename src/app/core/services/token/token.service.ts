import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}
  getToken(): any {
    return localStorage.getItem('access_token');
  }

  hasToken(): any {
    let token = this.getToken();
    return token != null;
  }
}
