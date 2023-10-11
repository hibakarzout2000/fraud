import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs'; // Import Observable

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  api = environment.apiUrl;
  
  constructor(private http: HttpClient) { }



  login(loginData: any): Observable<any> { // Return Observable<any>
    return this.http.post(this.api + '/login', loginData);
  }
  logout() {
    localStorage.removeItem('jwtToken'); // Remove the token from local storage on logout
  }
  verifyToken(token: string): Observable<any> {
    return this.http.post(`${this.api}/verify-token?token=${token}`, {});
  }
}
