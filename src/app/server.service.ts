import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {}

  storeService(servers: any[]) {
    return this.http.post('https://udemy-ng-http-7c72f.firebaseio.com/data.json', servers);
  }

}