import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url: string = 'http://localhost:3000/profile';

  constructor(private _http: HttpClient) { }

  getUserProfile() {
    return this._http.get(`${this.url}`);
  }
}
