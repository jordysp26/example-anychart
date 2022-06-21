import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { DemoDataProviderService } from '../demo-data-provider.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {

  @Output() chartEvent: EventEmitter<any> = new EventEmitter<any>();
  valueString:string="";

  subscription: Subscription;

  constructor(private dataService_: DemoDataProviderService) {
    this.subscription = this.dataService_.dataSetChanged$.subscribe(
      dataSet => this.chart.data(this.dataService_.getData(dataSet))
    );
  }

  @ViewChild('chartContainer') container;

  chart: anychart.charts.Pie = null;

  ngOnInit() {
    // Default data set mapping, hardcoded here.
    this.chart = anychart.pie(this.dataService_.getData('data1'));
  }

  ngAfterViewInit() {
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
  }

  getJpgBase64String(){
    this.chart.getJpgBase64String((response) => {
      var base64String = document.getElementById('getJpgBase64String');
      base64String.innerHTML = response;
      this.valueString = response;
      setTimeout(()=>{
        this.chartEvent.emit(this.valueString);
  
      }, 0)
    });
  }

}
