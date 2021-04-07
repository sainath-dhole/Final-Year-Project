import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-vsidebar',
  templateUrl: './vsidebar.component.html',
  styleUrls: ['./vsidebar.component.css','./vsidebar.component.scss']
})
export class VsidebarComponent implements OnInit {

  constructor(public authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}
