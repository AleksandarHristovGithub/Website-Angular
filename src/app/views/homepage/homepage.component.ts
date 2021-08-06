import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service.client';
import {SharedService} from '../../services/shared.service.client';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user = {type: ''};

  constructor(public header: HeaderService, private shareService: SharedService) { }

  ngOnInit() {
    this.header.show();
    if (this.shareService.user) {
      this.user = this.shareService.user;
    }
  }

}
