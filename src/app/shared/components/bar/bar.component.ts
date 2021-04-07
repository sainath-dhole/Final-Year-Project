import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

@Input() progress: number;
@Input() total: number;
color: string;
doughnut: any;


  constructor() { }

  ngOnInit(): void {
    this.doughnut =  new Chart('doughnut',{
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          //text: 'Placements According Fields'
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
					data: [40,13,25,7,15],
					backgroundColor: ["#FF5252","#009688","#9C27B0","#FF5722","#40C4FF"],
					label: 'Dataset 1'
				}],
				labels: ['DataScience','Opensource','	Security Analysts','Programming','Web development']
			}
    }) 

  }

}
