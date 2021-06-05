import { trigger, transition, animate, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Button, titleButtons } from '../titleButtons';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css'],
  animations: [
    trigger('hideSideBar', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AsideMenuComponent implements OnInit {
  titleButtons: Button[] = titleButtons;
  showSideBar: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSideBar(burgerMenu: HTMLElement): void {
    this.showSideBar = !this.showSideBar;
    burgerMenu.classList.toggle('change');
  }
}
