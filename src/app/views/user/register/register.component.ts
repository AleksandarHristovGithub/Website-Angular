import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';
import {HeaderService} from '../../../services/header.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') signupForm: NgForm;
  regusername;
  regpassword;
  regverify;
  regemail;
  regtype;
  regFirstName;
  regLastName;
  user = {username: '', password: '', email: '', firstName: '', lastName: '', type: 'user'};

  constructor(private router: Router,
              public header: HeaderService,
              private userService: UserService) { }

  ngOnInit() {
    this.header.hide();
  }

  onRegister() {
    this.userService.register(this.regusername, this.regpassword, this.regemail, this.regtype, this.regFirstName, this.regLastName)
      .subscribe(
        (user: User) => {
          this.router.navigate(['/login']);
        }
      );
  }
}
