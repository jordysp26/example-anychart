import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-column-polar',
  templateUrl: './column-polar.component.html',
  styleUrls: ['./column-polar.component.css']
})
export class ColumnPolarComponent implements OnInit, AfterViewInit {

  chart:anychart.charts.Polar=null;
  @Output() chartEvent: EventEmitter<any> = new EventEmitter<any>();
  valueString:string="";

  @ViewChild('chartContainer') container;

  constructor() { }

  ngOnInit(): void {
    // create polar chart
  this.chart = anychart.polar();

  let columnSeries:anychart.core.polar.series.Column = this.chart.column([
    { x: 'Rouge', value: 80540 },
    { x: 'Foundation', value: 94190 },
    { x: 'Mascara', value: 102610 },
    { x: 'Lip gloss', value: 110430 },
    { x: 'Lipstick', value: 128000 },
    { x: 'Nail polish', value: 143760 },
    { x: 'Eyebrow pencil', value: 170670 },
    { x: 'Eyeliner', value: 213210 },
    { x: 'Eyeshadows', value: 249980 }
  ]);

  // set series name
  columnSeries.name('Nevada');

  // set title settings
  this.chart
    .title()
    .enabled(true)
    .text('Cosmetic Products by Revenue')
    .padding({ bottom: 20 });

  // disable y-axis
  this.chart.yAxis(false);

  // set value prefix for tooltip
  this.chart.tooltip().valuePrefix('$');

  // set x-scale
  this.chart.xScale('ordinal');

}

ngAfterViewInit():void{
    // set chart container id
    this.chart.container(this.container.nativeElement);
    
    // initiate chart drawing
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

  downLoad():void{
    this.chart.saveAsSvg("A4",false,"My Chart SVG");   
    
  }

}
