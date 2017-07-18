import { Component } from '@angular/core';
import { GetService } from '../services/get.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'app-user-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent {
    users: any;
    message: string;
    usersArray: any;
    user: any;
    divDisplay: boolean = true;
    tableDisplay: boolean = false;
    textDivTable: string = 'Table';

    constructor(private getService: GetService, public afAuth: AngularFireAuth, private router: Router) {
        this.user = afAuth.authState;
        this.user.subscribe(user => {
            if (!user)
                this.router.navigate(['/']);
        });
    }
    searchUsers(name) {
        this.getService.getUserByName(name).subscribe(users => {
            this.users = users;
            this.usersArray = users.items;
            console.log(this.usersArray);
            if (this.users.total_count < 1) {
                this.message = 'Users not found';
            } else {
                this.message = 'Found ' + this.users.total_count + ' users';
            }
        });
    }

    changeView() {
        if (this.divDisplay) {
            this.divDisplay = false;
            this.textDivTable = 'Block'
        } else {
            this.divDisplay = true;
        }

        if (this.tableDisplay) {
            this.tableDisplay = false;
            this.textDivTable = 'Table'
        } else {
            this.tableDisplay = true;
        }
    }
}
