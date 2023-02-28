import {Injectable} from '@angular/core';
import {Auth, signInWithPopup, User, GoogleAuthProvider, signOut, authState} from "@angular/fire/auth";
import {EMPTY, Observable} from "rxjs";
import {doc, Firestore, setDoc} from "@angular/fire/firestore";
import {Timestamp} from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User | null> = EMPTY;

  constructor(private auth: Auth, private firestore: Firestore) {
    if (auth) {
      this.user$ = authState(this.auth);
    }
  }

  loginGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .then(res => {
          console.log(res);
          this.user$.subscribe(user => {
            const ref = doc(this.firestore, `users/${user?.uid}`);
            return setDoc(ref, {
              uid: user?.uid,
              displayName: user?.displayName,
              email: user?.email,
              emailVerified: user?.emailVerified,
              photoURL: user?.photoURL,
              createdAt: Timestamp.fromDate(new Date())
            });
          });
        }
      )
      .catch((e) => console.log(e));
  }

  logout() {
    return signOut(this.auth);
  }

}
