import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.sass']
})
export class RankingPageComponent implements OnInit {

  ranking: any;
  users: any = [];

  constructor(private rankingService: RankingService) { }

  ngOnInit(): void {
    this.rankingService.getRankingUsers()
      .toPromise()
      .then(data => {
        this.ranking = data;
        this.users = this.ranking.users;
      })
      .catch(console.log)
  }

}
