import {Injectable} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {Auth, User, GoogleAuthProvider, authState, signInWithPopup, signOut} from "@angular/fire/auth";

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
