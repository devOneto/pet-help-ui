import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  url: string = 'http://localhost:3000/posts';

  constructor(private _http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(this.url)
  }

}
