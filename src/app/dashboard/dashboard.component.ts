import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { delay, map } from 'rxjs/operators';
import { Dataset } from '../model/dataset';
import { AuthService } from '../service/auth.service';
import { LineChartComponent } from '../charts/line-chart/line-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

constructor(private service:AuthService, private lineChart:LineChartComponent) {
  
}

  // dataset!:Dataset[]
  result!: any
  // items: string[]=["item 1", "item 2", "item 3", "item 4"]
  itemDataset: { [item: string] : Dataset[] } = {};


ngOnInit(): void {
  this.service.getDataset(1).subscribe(x => {
    this.result = x;

    // debugger;
    // this.dataset=this.result
    
    this.itemDataset["item 1"] = [...this.result];
    this.itemDataset["item 1"][this.itemDataset['item 1'].length-1].title="A to B"
    this.itemDataset["item 1"][this.itemDataset['item 1'].length-1].dataLoaded=true
  });

  this.service.getDataset(2).subscribe(x => {
    this.result = x;
    this.itemDataset["item 1"] = [...this.itemDataset["item 1"], ...this.result];
    this.itemDataset["item 1"][this.itemDataset['item 1'].length-1].title="B to C"
    // this.itemDataset["item 1"][this.itemDataset['item 1'].length-1].dataLoaded

  });

  this.service.getDataset(5).subscribe(x => {
    this.result = x;

    this.itemDataset["item 1"] = [...this.itemDataset["item 1"], ...this.result];
    this.itemDataset["item 1"][this.itemDataset['item 1'].length-1].title="A to C"
    this.itemDataset["item 1"][this.itemDataset['item 1'].length-1].dataLoaded=true

  });

  this.service.getDataset(3).subscribe(x => {
    this.result = x;

    this.itemDataset["item 2"] = [...this.result];
    this.itemDataset["item 2"][this.itemDataset['item 2'].length-1].title="A to B"
    this.itemDataset["item 2"][this.itemDataset['item 2'].length-1].dataLoaded=true
  });

  this.service.getDataset(4).subscribe(x => {
    this.result = x;

    this.itemDataset["item 3"] = [...this.result];
    this.itemDataset["item 3"][this.itemDataset['item 3'].length-1].title="C to B"
    this.itemDataset["item 3"][this.itemDataset['item 3'].length-1].dataLoaded=true
  });

  this.service.getDataset(5).subscribe(x => {
    this.result = x;
    

    this.itemDataset["item 3"] = [...this.itemDataset["item 3"],...this.result];
    this.itemDataset["item 3"][this.itemDataset['item 3'].length-1].title="B to A"
    this.itemDataset["item 3"][this.itemDataset['item 3'].length-1].dataLoaded=true
  });
}

  private breakpointObserver = inject(BreakpointObserver);

  

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }
 
     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );
 
}
