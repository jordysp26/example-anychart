import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataPickerComponent } from './data-picker/data-picker.component';
import { ChartComponent } from './chart/chart.component';
import { DemoDataProviderService } from './demo-data-provider.service';
import { FormsModule } from '@angular/forms';

import 'anychart';
import { ColumnPolarComponent } from './column-polar/column-polar.component';


@NgModule({
  declarations: [
    AppComponent, DataPickerComponent, ChartComponent, ColumnPolarComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [DemoDataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
