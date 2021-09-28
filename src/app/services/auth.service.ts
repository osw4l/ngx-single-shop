import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, pipe} from 'rxjs';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  getCurrentToken() {
    const token = localStorage.getItem('accessToken');
    if (isNotNullOrUndefined(token)) {
      return token;
    } else {
      return null;
    }
  }


  isLoggedIn() {
    return this.getCurrentToken();
  }

}
