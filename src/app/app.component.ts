import {Component, Output, ViewEncapsulation} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css',
    '../../node_modules/anychart/dist/css/anychart-ui.min.css',
    '../../node_modules/anychart/dist/fonts/css/anychart-font.min.css'
  ]
})
export class AppComponent {
  title = 'app';
  imageBase64:any=null

  constructor(private sanitizer: DomSanitizer) {}

  
  getJpgBase64String(chartString:any) {
    let chartSafe = this.sanitizer.bypassSecurityTrustResourceUrl(chartString);
    
    this.imageBase64 = 'data:image/png;base64,' + chartString;
  }

  
}
