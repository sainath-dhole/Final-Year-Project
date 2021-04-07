import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vheader',
  templateUrl: './vheader.component.html',
  styleUrls: ['./vheader.component.css']
})
export class VheaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
