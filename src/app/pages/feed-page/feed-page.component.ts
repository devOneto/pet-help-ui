import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.sass']
})
export class FeedPageComponent implements OnInit {

  posts: any;

  constructor(private _feedService: FeedService) { }

  ngOnInit(): void {
    this._feedService.getPosts()
      .toPromise()
      .then(data => { this.posts = data; console.log(data) })
      .catch(console.log)
  }

}
