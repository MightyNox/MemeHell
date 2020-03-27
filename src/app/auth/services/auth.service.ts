import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Credentials} from '../models/credentials.model';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  public currentUser$: BehaviorSubject<User>;

  constructor(private readonly http: HttpClient,
              private readonly router: Router) {
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    this.currentUser$ = new BehaviorSubject<User>(user);
  }

  async login(credentials: Credentials) {
    const url = '/api/users/auth';
    const user = await this.http.post(url, credentials).toPromise();
    const userString = JSON.stringify(user);
    localStorage.setItem('user', userString);
    this.currentUser$.next(user as User);
    await this.router.navigate(['home']);
  }

  async logout() {
    localStorage.removeItem('user');
    this.currentUser$.next(null);
    await this.router.navigate(['home']);
  }
}
