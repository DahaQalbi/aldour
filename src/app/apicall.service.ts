import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
const apiUrl = 'https://aldour.thecodingverse.com/api/';

@Injectable({
  providedIn: 'root',
})
export class ApicallService {
  private http: HttpClient = inject(HttpClient);

  constructor() {}
  public signup(data: any): Observable<any> {
    return this.http.post(apiUrl + `newuser`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public login(data: any): Observable<any> {
    return this.http.post(apiUrl + `login`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public getCountry(): Observable<any> {
    return this.http.get(apiUrl + `allcountry`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public deleteChannel(cid: any): Observable<any> {
    return this.http.get(apiUrl + `deletechannel/${cid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public UpdateUser(userObj: any): Observable<any> {
    return this.http.post(apiUrl + `user/update`, userObj).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
