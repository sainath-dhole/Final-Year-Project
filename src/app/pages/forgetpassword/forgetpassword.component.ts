import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/auth';
import  auth  from 'firebase/app';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})

export class ForgetpasswordComponent implements OnInit {
  
  email: string
  public frmPasswordReset: FormGroup;
  mode = this.activatedActivated.snapshot.queryParams['mode'];
  constructor(private activatedActivated: ActivatedRoute,private auth: AuthService, private router: Router, private afAuth: AngularFireAuth, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmPasswordReset = this.fb.group({
      email: [null, [Validators.required, Validators.email]]
    });

    /*const email = this.frmPasswordReset.controls['email'].value;

this.afAuth.auth.sendPasswordResetEmail(email).then(
  () => {
    // success, show some message
  },
  err => {
    // handle errors
  }
);*/
  }

  sendPasswordResetRequest()
  {
    const email = this.frmPasswordReset.controls['email'].value;

    this.afAuth.sendPasswordResetEmail(email).then(
      () => {
        // success, show some message
      },
      err => {
        // handle errors
      }
    ); 
  }
  // resetPassword(email){
  //   return this.auth.resetPassword(this.email)
  //   .then(() => this.router.navigate(['/login'])) 
  // }

}
