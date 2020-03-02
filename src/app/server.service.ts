import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {}

  storeService(servers: any[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('https://udemy-ng-http-7c72f.firebaseio.com/data.json', servers, {headers: headers});
  }

}