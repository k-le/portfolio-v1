import { trigger, transition, animate, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { NgsRevealConfig } from 'ngx-scrollreveal';

import { MobileService } from './mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeElem', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AppComponent {
  mobile: boolean;
  title: string = 'personal-website';

  constructor(private mobileService: MobileService, config: NgsRevealConfig) {
    config.duration = 200;
    config.easing = 'cubic-bezier(.25, .1, .25, .1)';
  }

  ngOnInit(): void {}

  showMobile(): void {
    this.mobile = this.mobileService.isMobile();
  }
}
