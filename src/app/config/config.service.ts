import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {
   }
   getUsers(){
     return this.http.get<any>('http://localhost:3000/api/users');
   }
}