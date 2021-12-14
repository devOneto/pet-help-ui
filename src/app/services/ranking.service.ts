import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  url: string = 'http://localhost:3000/ranking';

  constructor(private _http: HttpClient) { }

  getRankingUsers() {
    return this._http.get(`${this.url}`);
  }

}
