import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Auth App using Angular 4 and Firebase';
  $users: FirebaseObjectObservable<any[]>;
  users: any[];
  constructor(db: AngularFireDatabase) {
    this.$users = db.object('users');
    this.$users.subscribe(users => {
      this.users = Object.keys(users).map(k => users[k]);
    });
  }
}
