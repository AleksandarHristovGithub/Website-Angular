import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs-compat/add/operator/map';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {SharedService} from './shared.service.client';
import {Router} from '@angular/router';

@Injectable()
export class UserService {

  private isLoggedIn = new BehaviorSubject(false);
  loggedInFlag = this.isLoggedIn.asObservable();
  private uid = new BehaviorSubject('');
  loggedInUser = this.uid.asObservable();

  baseUrl = environment.baseUrl;

  constructor(private http: Http, private sharedService: SharedService, private router: Router) {}


  loginObs(userId) {
    this.isLoggedIn.next(true);
    this.uid.next(userId);
  }

  logoutObs() {
    this.isLoggedIn.next(false);
    this.uid.next('');
  }

  createUser(user) {
    return this.http.post(this.baseUrl + '/api/user', user)
      .map((res: Response) => {
        return res.json();
      });
  }

  findAllUsers() {
    return this.http.get(this.baseUrl + '/api/users')
      .map((res: Response) => {
        return res.text() ? res.json() : [];
      });
  }

  findUserById(userId: string) {
    return this.http.get(this.baseUrl + '/api/user/' + userId)
      .map((res: Response) => {
        return res.json();
      });
  }

  findUserByUsername(username: string) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username)
      .map((res: Response) => {
        return res.text() ? res.json() : undefined;
      })
  }

  findUserByCredentials(username: string, password: string) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map((res: Response) => {
        return res.text() ? res.json() : undefined;
      });
  }

  updateUser(userId: string, newUser) {
    return this.http.put(this.baseUrl + '/api/user/' + userId, newUser)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteUser(userId: string) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId)
      .map((res: Response) => {
        return res.json();
      });
  }

  login(username: string, password: string) {
    const body = {
      username: username,
      password: password
    };
    return this.http.post(this.baseUrl + '/api/login', body, {withCredentials: true})
      .map((res: Response) => {
        return res.text() ? res.json() : undefined;
      });
  }

  logout() {
    // console.log("logout...");
    return this.http.post(this.baseUrl + '/api/logout', {}, {withCredentials: true});
  }

  register(username, password, email, type, firstName, lastName){
    const user = {
      username: username,
      password: password,
      email: email,
      type: type,
      firstName: firstName,
      lastName: lastName
    };
    return this.http.post(this.baseUrl + '/api/register', user, {withCredentials: true})
      .map((res: Response) => {
        return res.json();
      });
  }

  loggedIn() {
    return this.http.post(this.baseUrl + '/api/loggedIn', '', {withCredentials: true})
      .map((res: Response) => {
        const user = res.json();
        // console.log(user);
        if (user != 0) {
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
  }
}
