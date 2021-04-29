import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { SectionService } from '../section.service';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
})
export class AboutSectionComponent implements OnInit {
  mobile: boolean;

  constructor(
    private sectionService: SectionService,
    private mobileService: MobileService
  ) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
    this.showMobile();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    const heading: HTMLElement = document.getElementById('about-heading');
    const fieldSet: HTMLElement = document.getElementById('about-fieldset');
    const bodyText: HTMLElement = document.getElementById('about-text');
    const bodyImg: HTMLElement = document.getElementById('about-img');

    if (this.sectionService.isElementPassed(heading, 40)) {
      heading.classList.remove('hidden');
      heading.classList.add('animate__fadeInLeft');
      fieldSet.classList.remove('hidden');
      fieldSet.classList.add('animate__fadeIn');
      fieldSet.classList.add('content-fieldset');
    }

    if (this.sectionService.isElementPassed(bodyText, 30)) {
      bodyText.classList.remove('hidden');
      bodyText.classList.add('animate__fadeInUp');
    }

    if (this.sectionService.isElementPassed(bodyImg)) {
      bodyImg.classList.remove('hidden');
      bodyImg.classList.add('animate__fadeInRight');
    }
  };

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.showMobile();
    const bodyImg: HTMLElement = document.getElementById('about-img');
    if (this.sectionService.isElementPassed(bodyImg)) {
      bodyImg.classList.remove('hidden');
      bodyImg.classList.add('animate__fadeInRight');
    }
  }

  showMobile(): void {
    if (this.mobileService.isMobile()) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }
}
