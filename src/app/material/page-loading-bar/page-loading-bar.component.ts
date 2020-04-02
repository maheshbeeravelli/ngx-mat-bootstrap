import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-loading-bar',
  templateUrl: './page-loading-bar.component.html',
  styleUrls: ['./page-loading-bar.component.scss']
})
export class PageLoadingBarComponent implements OnInit {
  @Input('mode') mode;
  @Input('color') color;
  constructor() {}
  ngOnInit() {}
}
