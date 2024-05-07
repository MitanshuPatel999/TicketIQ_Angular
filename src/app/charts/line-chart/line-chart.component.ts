// line-chart.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption, init } from 'echarts';
import { Dataset } from '../../model/dataset';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() dataset!:Dataset;
  chartOption!: EChartsOption;
  
  ngOnInit(): void {
    // debugger;
    this.chartOption  = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['total req/res', 'failure']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: this.dataset.labels
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'total req/res',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: this.dataset.data1
      },
      {
        name: 'failure',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: this.dataset.data2
      }
    ]
  };
  }

  
  
  

}
