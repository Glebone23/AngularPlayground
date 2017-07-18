import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

@Injectable()

export class GetService {
    clientId: string;
    clientSecret: string;
    constructor(private http: Http, public afAuth: AngularFireAuth) {
        this.clientId = afAuth.app.options['gitHub'].clientId;
        this.clientSecret = afAuth.app.options['gitHub'].clientSecret;
    }
    getUserById(id) {
        return this.http.get('https://api.github.com/user/' + id + '?client_id=' + this.clientId + '&client_secret=' + this.clientSecret)
            .map(res => res.json());
    }
    getUserByName(name) {
        return this.http.get('https://api.github.com/search/users?per_page=10&q=' + name + '&client_id=' + this.clientId + '&client_secret=' + this.clientSecret)
            .map(res => res.json());
    }
}

