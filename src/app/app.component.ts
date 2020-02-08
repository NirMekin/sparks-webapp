import {Component, OnInit} from '@angular/core';
import {CommonService} from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sparks-webapp';
  isMobile: boolean;

  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.isMobile = this.common.isMobile();
  }
}
