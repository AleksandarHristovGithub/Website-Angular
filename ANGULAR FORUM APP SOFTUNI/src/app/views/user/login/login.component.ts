import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model';
import {HeaderService} from '../../../services/header.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  user;
  username;
  password;

  constructor(private router: Router,
              private route: ActivatedRoute,
              public header: HeaderService,
              private userService: UserService) { }

  ngOnInit() {
    this.header.hide();
  }

  onLogin() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.login(this.username, this.password)
      .subscribe(
        (user: User) => {
          this.user = user;
          if (this.user === undefined || this.user === null) {
            alert("Incorrect Username or Password");
            this.router.navigate(['/login']);
            this.userService.logoutObs();
            this.userService.logout();
            this.loginForm.onReset();
          } else {
            this.userService.loginObs(this.user._id);
            this.router.navigate(['/stream']);
          }
        }, (err) => {
          alert("Incorrect Username or Password");
          this.router.navigate(['/login']);
          this.userService.logoutObs();
          this.userService.logout();
          this.loginForm.onReset();
        }
      );
  }
}
