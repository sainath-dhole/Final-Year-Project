import { findLast } from '@angular/compiler/src/directive_resolver';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserauthState: any = null;
  isLoggedIn: boolean;

  constructor(private afu: AngularFireAuth, private router: Router) { 
    this.afu.authState.subscribe((auth =>{
      if(this.UserauthState){
      this.UserauthState = auth.uid;
    }
    }))
  }

  // all firebase getdata functions

  get isUserAnonymousLoggedIn(): boolean {
    return (this.UserauthState !== null) ? this.UserauthState.isAnonymous : false
  }

   currentUserId() {
    this.afu.authState.subscribe((auth =>{
      
      this.UserauthState = auth.uid;
      
    
  }));return this.UserauthState;
}

  get currentUserName(): string {
    return this.UserauthState['email']
  }

  get currentUser(): any {
    return (this.UserauthState !== null) ? this.UserauthState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.UserauthState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    } else {
      return false
    }
  }

registerWithEmail(email: string, password: string) {
    return this.afu.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.UserauthState = user
      })
      // .then((user) => {
      //   return this.afu.auth.currentUser.sendEmailVerification()
      //   .then(() => console.log("We sent you an email verification"))
      //   .catch(error =>console.log(error.message))
      // })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  // resetPassword(email: string){
  //   return firebase.auth().sendPasswordResetEmail(email)
  //   .then(() => console.log("we've sent you a password reset link"))
  //   .catch(error => console.log(error.message))
  // }

  loginWithEmail(email: string, password: string)
  {
    return this.afu.signInWithEmailAndPassword(email, password)
      .then((user) => {
        user=this.UserauthState
        console.log(user);
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  singout(): void
  {
    this.afu.signOut();
    this.router.navigate(['/login']);
  }


}
