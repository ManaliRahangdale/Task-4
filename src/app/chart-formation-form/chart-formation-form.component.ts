import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-formation-form',
  templateUrl: './chart-formation-form.component.html',
  styleUrls: ['./chart-formation-form.component.css']
})
export class ChartFormationFormComponent {
  @ViewChild('pieChartForm') pieChartFormObj:any;
  secondValue!: number;
  firstValue!: number;

  ctx : any;
  config : any;
  chartData : number[] = [];
  chartDatalabels : any[] = [];
  myChart : any;


  createChart(){
    this.pushFormDataIntoChart();
    // this.myChart.update();
    this.prepareChart();
  }
  pushFormDataIntoChart() {
    this.chartData.push(this.pieChartFormObj.value.firstValues);
    this.chartData.push(this.pieChartFormObj.value.secondValues);
  }
  
  
  
  totalExceedsLimit() {
    return this.firstValue + this.secondValue > 100;
  }
 

  
  
    ngOnInit(){
  
    }
    prepareChart(){
      this.ctx = document.getElementById('myChart');
      this.config = {
        type : 'pie',
        options : {
        },
        data : {
          labels : this.chartDatalabels,
          datasets : [{ 
            label: 'Chart Data',
            data: this.chartData,
            borderWidth: 5,
            borderColor: 'grey',
            backgroundColor: ['#444544', '#9d9e9d']
        }],
        }
      }
      this.myChart = new Chart(this.ctx, this.config);
    }

  

}


