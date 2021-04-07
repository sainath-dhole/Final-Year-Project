import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sideBarOpen = true;
  UserUid: any;

  constructor(public authservice:AuthService) { }

  ngOnInit() {this.UserUid=this.authservice.currentUserId();
    console.log(this.UserUid);
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
function UserauthState(UserauthState: any): any {
  throw new Error('Function not implemented.');
}

