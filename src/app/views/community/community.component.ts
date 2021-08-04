import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service.client';
import {SharedService} from '../../services/shared.service.client';
import {UserService} from '../../services/user.service.client';
import {Router} from '@angular/router';
import {MapService} from '../../services/map.service.client';
import {HttpClient} from '@angular/common/http';

interface Location {
  location: {
    lat: string;
    lng: string;
    region: string;
    country: string;
  }
}

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  userId;
  user = {firstName: '', lastName: '', address: '', state: '', country: '', type: 'user'};
  lat = '';
  lng = '';
  data;

  constructor(public header: HeaderService, private sharedService: SharedService, private userService: UserService, private router: Router, private mapService: MapService, private http: HttpClient) { }

  ngOnInit() {
    this.header.show();
    if (this.sharedService.user) {
      this.user = this.sharedService.user;
      this.userId = this.sharedService.user._id;
    }
    // this.data = this.mapService.loc;
    // this.lat = this.data.location.lat;
    // this.lng = this.data.location.lng;
    // this.user.state = this.data.location.region;
    // this.user.country = this.data.location.country;
    // this.mapService.getLocation().subscribe((data) => {
    //   // console.log(data);
    //   this.lat = data.location.lat;
    //   this.lng = data.location.lng;
    //   this.user.state = data.location.region;
    //   this.user.country = data.location.country;
    // })

    this.http.get<{ ip: string }>('https://jsonip.com')
      .subscribe(data => {
        // console.log('th data', data);
        this.http.get<Location>('https://geo.ipify.org/api/v1?apiKey=at_oVTOjvWzfktZRJDeQsm1wwVWJSOLL&ipAddress=' + data.ip)
            .subscribe(data => {
              this.lat = data.location.lat;
              this.lng = data.location.lng;
              this.user.state = data.location.region;
              this.user.country = data.location.country;
            });
      });

    // this.http.get<Location>('https://geo.ipify.org/api/v1?apiKey=at_oVTOjvWzfktZRJDeQsm1wwVWJSOLL&ipAddress=8.8.8.8')
    //     .subscribe(data => {
    //       this.lat = data.location.lat;
    //       this.lng = data.location.lng;
    //       this.user.state = data.location.region;
    //       this.user.country = data.location.country;
    //     });
  }

  onSubmit() {
    this.user.type = 'membership';
    this.userService.updateUser(this.userId, this.user)
      .subscribe((user) => {
        this.user = user;
        this.sharedService.user = user;
      });
    this.router.navigate(['/home']);
  }

}
