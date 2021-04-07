import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vdashboard',
  templateUrl: './vdashboard.component.html',
  styleUrls: ['./vdashboard.component.css']
})
export class VdashboardComponent implements OnInit {
  sideBarOpen = true;


  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
