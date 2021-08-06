import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {SharedService} from '../../services/shared.service.client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userId;
  user = {username: '', type: ''};
  subscription1: Subscription;
  subscription2: Subscription;
  loggedInFlag = false;

  constructor(public userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.subscription1 = this.userService.loggedInFlag
      .subscribe((loggedInFlag) => {
        this.loggedInFlag = loggedInFlag;
      });
    this.subscription2 = this.userService.loggedInUser
      .subscribe((loggedInUser) => {
        this.userId = loggedInUser;
      });
    if (this.loggedInFlag) {
      // console.log(this.userId);
      this.userService.findUserById(this.userId)
        .subscribe((user) => {
          this.user = user;
        });
    }
    if (this.sharedService.user) {
      this.loggedInFlag = true;
    }
  }

  onLogout() {
    this.userService.logoutObs();
    this.userService.logout()
      .subscribe((data) => {
        this.sharedService.user = null;
        // console.log("header", this.sharedService.user);
        this.router.navigate(['/home']);
      });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
