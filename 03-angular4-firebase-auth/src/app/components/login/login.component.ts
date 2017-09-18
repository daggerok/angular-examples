import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { auth, User } from 'firebase/app';

const GoogleAuthProvider = auth.GoogleAuthProvider;

@Component({
  selector: 'app-login',
  template: `
    <div class="container-fluid">
      <div> {{ (user | async)?.uid }} </div>
      <button class="btn btn-primary" (click)="logIn()">Login</button>
      <button class="btn btn-info" (click)="logOut()">Logout</button>
    </div>
  `,
  styles: [],
})
export class LoginComponent implements OnInit {
  user: Observable<User>;
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
  ngOnInit() {}
  logIn() {
    this.afAuth.auth.signInWithPopup(
      new GoogleAuthProvider()
    );
  }
  logOut() {
    this.afAuth.auth.signOut();
  }
}
