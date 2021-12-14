import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.sass']
})
export class BottomNavComponent implements OnInit {

  tabs =
    [
      { title: 'Ranking', route: 'ranking' },
      { title: 'Feed', route: 'feed' },
      { title: 'Profile', route: 'profile' },
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
