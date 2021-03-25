import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { io } from 'socket.io-client';
const socket = io('http://localhost:3000');

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css' ]
})
export class PieComponent implements OnInit {
  title = 'dashboard';
  chart;
  chart2 = [];
  pie: any;
  doughnut: any;

  data1 = [];


  constructor() { }

  ngOnInit() {
    socket.on('data1', (res) => {
      this.updateChartData(this.chart, res, 0);
      this.updateChartData(this.doughnut,res.slice(0,5), 0);
    })

    socket.on('data2', (res) => {
      this.updateChartData(this.chart, res, 1);
    })

    this.chart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Placements In Different Companies'
        },
      },
      data: {
        labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            type: 'bar',
            label: 'TCS',
            data: [243, 156, 365, 30, 156, 265, 356, 543],
            backgroundColor: 'rgba(255,0,255,0.4)',
            borderColor: 'rgba(255,0,255,0.4)',
            fill: false,
          },
          // {
          //   type: 'line',
          //   label: 'Dataset 2',
          //   backgroundColor: 'rgba(0,0,255,0.4)',
          //   borderColor: 'rgba(0,0,255,0.4)',
          //   data: [
          //     443, 256, 165, 100, 56, 65, 35, 543
          //   ],
          //   fill: true,
          // },
          {
            type: 'bar',
            label: 'Capgemini',
            data: [243, 156, 365, 30, 156, 265, 356, 543].reverse(),
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: false,
          },
          {
            type: 'bar',
            label: 'Wipro',
            data: [ 543, 243,156, 156, 365, 30,  265, 356].reverse(),
            backgroundColor: '#9C27B0',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: false,
          },
          {
            type: 'bar',
            label: 'Byjus',
            data: [343, 106, 205, 200, 56, 25, 100, 340].reverse(),
            backgroundColor: '#4CAF50',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: false,
          }
        ]
      }
    });

    let options = {
      // aspectRatio: 1,
      // legend: false,
      tooltips: false,

      elements: {
        point: {
          borderWidth: function (context) {
            return Math.min(Math.max(1, context.datasetIndex + 1), 8);
          },
          hoverBackgroundColor: 'transparent',
          hoverBorderColor: function (context) {
            return "red";
          },
          hoverBorderWidth: function (context) {
            var value = context.dataset.data[context.dataIndex];
            return Math.round(8 * value.v / 1000);
          },
          radius: function (context) {
            var value = context.dataset.data[context.dataIndex];
            var size = context.chart.width;
            var base = Math.abs(value.v) / 1000;
            return (size / 24) * base;
          }
        }
      }
    };

    // new Chart('bubble', {
    //   type: 'bubble',
    //   options: options,
    //   data: {
    //     datasets: [
    //       {
    //       backgroundColor: 'rgba(255,0,0,0.4)',
    //       label: 'Name 1',
    //       data: [{
    //         x: 50,
    //         y: 60,
    //         v: 200
    //         },{
    //           x: 50,
    //           y: 80,
    //           v: 700
    //         },{
    //           x: 80,
    //           y: 60,
    //           v: 100
    //         },{
    //         x: 60,
    //         y: 60,
    //         v: 500
    //         },{
    //         x: 90,
    //         y: 80,
    //         v: 800
    //         }]
    //       },{
    //         backgroundColor: 'rgba(0,255,0,0.4)',
    //         label: 'Name 2',
    //         data: [{
    //           x: 60,
    //           y: 20,
    //           v: 200
    //         },{
    //           x: 55,
    //           y: 70,
    //           v: 800
    //         }, {
    //           x: 80,
    //           y: 30,
    //           v: 500
    //         },{
    //           x: 70,
    //           y: 40,
    //           v: 800
    //         }]}]
    //   }
    // })

    this.doughnut =  new Chart('doughnut',{
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Placements According Fields'
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
					backgroundColor: ["red","orange","yellow","green","blue"],
					label: 'Dataset 1'
				}],
				labels: ['DataScience','Opensource','	Security Analysts','Programming','Web development']
			}
    })

    this.pie = new Chart('pie',{
      type: 'pie',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Pie Chart'
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
					data: [45,10,5,25,15].reverse(),
					backgroundColor: ["red","orange","yellow","green","blue"],
					label: 'Dataset 1'
				}],
				labels: ['Red','Orange','Yellow','Green','Blue']
			}
    })

  }

  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

updateChartData(chart, data, dataSetIndex){
  chart.data.datasets[dataSetIndex].data = data;
  chart.update();
}

  }


