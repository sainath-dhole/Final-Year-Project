import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  email = "";
  password = "";
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle


  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  // clearErrorMessage() {
  //   this.errorMessage = '';
  //   this.error = { name: '', message: '' };
  // }

  login()
  {
    console.log('email is :',this.email,'pass is :',this.password);
    if(this.email == 'abc@gmail.com' && this.password == 'demo'){
      this.router.navigateByUrl('default');
    }else{
      alert('worng credentials')
    }
    /*this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.loginWithEmail(this.email, this.password)
        .then(() => {
         this.router.navigate(['/userinfo'])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/login'])
        })
    }*/
  }

  // validateForm(email, password) {
  //   if (email.lenght === 0) {
  //     this.errorMessage = "please enter email id";
  //     return false;
  //   }

  //   if (password.lenght === 0) {
  //     this.errorMessage = "please enter password";
  //     return false;
  //   }

  //   if (password.lenght < 6) {
  //     this.errorMessage = "password should be at least 6 char";
  //     return false;
  //   }

  //   this.errorMessage = '';
  //   return true;

  // }

}
