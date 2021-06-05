import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactModalComponent } from './contact-button/contact-modal/contact-modal.component';

import { fixedButtons, Button } from '../titleButtons';
import { ScrollDataService } from 'angular-scroll-animations';
import { SectionService } from '../section.service';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  animations: [
    trigger('myFadeElement', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('150ms ease-out', style({ opacity: 0 }))]),
    ]),
    trigger('fadeBurgerMenu', [
      transition(':leave', [animate('225ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HeroSectionComponent implements OnInit {
  mobile: boolean;
  showBurgerMenu: boolean;
  showFixedButtons: boolean;
  buttons: Button[] = fixedButtons;

  constructor(
    private modalService: NgbModal,
    private mobileService: MobileService,
    private scrollService: ScrollDataService,
    private sectionService: SectionService
  ) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
    this.showMobile();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
  }

  /**
   * Uses a modal service to open a Bootstrap modal component.
   */
  open() {
    const modalRef = this.modalService.open(ContactModalComponent, {
      size: 'lg',
      scrollable: true,
    });
  }

  scroll = (): void => {
    const button: HTMLElement = document.getElementById('heading-4');
    if (!this.sectionService.isElementSeen(button)) {
      if (this.mobile) {
        // Show the burger menu when the title buttons are gone and it's displaying for mobile.
        this.showBurgerMenu = true;
        this.showFixedButtons = false;
      } else {
        this.showBurgerMenu = false;
        this.showFixedButtons = true;
      }
    } else {
      this.showBurgerMenu = false;
      this.showFixedButtons = false;
    }
  };

  /**
   * Grabs the current scroll position.
   */
  getScrollPosition(): number {
    return this.scrollService.scrollPosition;
  }

  /**
   * Checks if the scroll position is at the top.
   */
  isScrollAtTop(): boolean {
    return this.getScrollPosition() === 0;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.showMobile();
    const button: HTMLElement = document.getElementById('heading-4');
    if (!this.sectionService.isElementSeen(button)) {
      if (this.mobile) {
        // Show the burger menu when the title buttons are gone and it's displaying for mobile.
        this.showBurgerMenu = true;
        this.showFixedButtons = false;
      } else {
        this.showBurgerMenu = false;
        this.showFixedButtons = true;
      }
    } else {
      this.showBurgerMenu = false;
      this.showFixedButtons = false;
    }
  }

  showMobile(): void {
    this.mobile = this.mobileService.isMobile();
  }

  scrollToAbout(): void {
    const windowHeight: number = window.innerHeight;
    window.scrollTo(0, windowHeight);
  }
}
