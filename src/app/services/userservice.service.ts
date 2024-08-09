import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  id: number;
  Name: string;
  Email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(
    private _http:HttpClient
  ) { }

  URL_API='http://localhost:63888/api';

  getUsers(): Observable<User[]>{
    let response$: any = this._http.get(`${this.URL_API}//users`);
    return response$;
  }
}
