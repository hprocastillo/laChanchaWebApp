import {Injectable} from '@angular/core';
import {Auth, signInWithPopup, User, GoogleAuthProvider, signOut, authState} from "@angular/fire/auth";
import {EMPTY, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User | null> = EMPTY;

  constructor(private auth: Auth) {
    if (auth) {
      this.user$ = authState(this.auth);
    }
  }

  loginGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }
}
