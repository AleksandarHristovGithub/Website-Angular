import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface Location {
  location: {
    lat: string;
    lng: string;
    region: string;
    country: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MapService {

  ip;
  loc = {location: {lat: '', lng: '', region: '', country: ''}};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http.get<{ ip: string }>('https://jsonip.com')
    //     .subscribe(data => {
    //       console.log('th data', data);
    //       this.ip = data.ip;
    //       this.http.get<Location>('https://geo.ipify.org/api/v1?apiKey=at_oVTOjvWzfktZRJDeQsm1wwVWJSOLL&ipAddress=' + data.ip)
    //           .subscribe(location => {
    //             this.loc = location;
    //           });
    //     });
  }

  getLocation() {
    // return this.http.get<Location>('https://geo.ipify.org/api/v1?apiKey=at_oVTOjvWzfktZRJDeQsm1wwVWJSOLL&ipAddress=8.8.8.8');
  }
}
