import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service.client';
import {HeaderService} from '../../../services/header.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild("f") profileForm = NgForm;
  user = { username: '', password: '', firstName: '', lastName: '', email: ''};
  userId;

  constructor(public header: HeaderService, private sharedService: SharedService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userId = this.sharedService.user._id;
    this.header.show();
    return this.userService.findUserById(this.userId)
      .subscribe((user) => {
        this.user = user;
      })
  }

  onUpdate() {
    this.userService.updateUser(this.userId, this.user)
      .subscribe((user) => {
        alert("Successfully update your profile");
        this.user = user;
        this.router.navigate(['/stream']);
      })
  }
}
