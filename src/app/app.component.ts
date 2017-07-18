import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { GetService } from './services/get.service';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: Observable<firebase.User>;
  isAuthorized: boolean;
  AuthUser: any;
  username: string;
  avatarUrl: string;
  accountUrl: string;
  userlogin: string;

  constructor(public afAuth: AngularFireAuth, private getService: GetService) {
    this.user = afAuth.authState;
    this.user.subscribe(user => {
      if (user) {
        this.isAuthorized = true;
        this.getService.getUserById(user.providerData[0].uid).subscribe(AuthUser => {
          this.AuthUser = AuthUser;
          this.avatarUrl = AuthUser.avatar_url;
          this.accountUrl = AuthUser.html_url;
          this.userlogin = AuthUser.login;
          if (isNullOrUndefined(AuthUser.name))
            this.username = AuthUser.login;
          else this.username = AuthUser.name;
          // console.log(this.AuthUser);
        });
      } else {
        this.isAuthorized = false;
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
