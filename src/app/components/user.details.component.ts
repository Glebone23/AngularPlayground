import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { GetService } from '../get.servise';
import {isNullOrUndefined} from 'util';

@Component({
    selector: 'app-user-details',
    templateUrl: './user.details.component.html',
    styleUrls: ['./user.details.component.css'],
})
export class UserDetailsComponent {
    parsedUrl: any;
    user: any;
    AuthUser: any;
    login: string;
    username: string;
    avatarUrl: string;
    accountUrl: string;
    location: string;
    bio: string;
    created_at: any;
    isAuthorized: boolean;
    userById: any;
    constructor(private router: Router, public afAuth: AngularFireAuth, private getService: GetService) {
        this.user = afAuth.authState;
        this.user.subscribe(user => {
            if (user) {
                this.isAuthorized = true;
                this.parsedUrl = this.router.parseUrl(this.router.url);
                this.parsedUrl = this.parsedUrl.root.children.primary.segments[1].path;

                this.getService.getUserByName(this.parsedUrl).subscribe( User => {
                    this.userById = User.items[0].id;

                    if (!isNullOrUndefined(this.userById)) {
                        this.getService.getUserById(this.userById).subscribe(AuthUser => {

                            this.AuthUser = AuthUser;
                            this.login = AuthUser.login;
                            this.created_at = new Date(AuthUser.created_at).toString();
                            this.avatarUrl = AuthUser.avatar_url;
                            this.accountUrl = AuthUser.html_url;
                            this.parsedUrl = this.router.parseUrl(this.router.url);

                            if (!isNullOrUndefined(AuthUser.name))
                                this.username = AuthUser.name;
                            else this.username = 'Sorry, but username does not exist';

                            if (!isNullOrUndefined(AuthUser.location))
                                this.location = AuthUser.location;
                            else this.location = 'Sorry, but location does not exist';

                            if (!isNullOrUndefined(AuthUser.bio))
                                this.bio = AuthUser.bio;
                            else this.bio = 'Sorry, but bio does not exist';
                        });
                    } else {
                        this.router.navigate(['/']);
                    }
                });
            } else {
                this.router.navigate(['/']);
            }
        });
    }
}
