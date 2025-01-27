import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login(username: string, password: string): number {
    if (username && password) {
      if(username === 'admin' && password === '1234') {
        return 200;
      } else {
        return 403;
      }
    }
    return 403;
  }
}
