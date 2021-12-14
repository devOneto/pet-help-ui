import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass']
})
export class ProfilePageComponent implements OnInit {

  userProfile: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getUserProfile()
      .toPromise()
      .then(data => { this.userProfile = data; console.log(data); })
      .catch(console.log)
  }

}
