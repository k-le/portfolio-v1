import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { SectionService } from '../section.service';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css'],
})
export class ProjectSectionComponent implements OnInit {
  mobile: boolean;

  constructor(
    private mobileService: MobileService,
    private sectionService: SectionService
  ) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollRevealTitle, true);
    window.addEventListener('scroll', this.scrollRevealContent, true);
    this.showMobile();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollRevealTitle, true);
    window.removeEventListener('scroll', this.scrollRevealContent, true);
  }

  scrollRevealTitle = (): void => {
    const heading: HTMLElement = document.getElementById('project-heading');
    const fieldset: HTMLElement = document.getElementById('project-fieldset');

    if (this.sectionService.isElementPassed(heading, 50)) {
      heading.classList.remove('hidden');
      fieldset.classList.remove('hidden');
      heading.classList.add('animate__fadeInLeft');
      fieldset.classList.add('animate__fadeIn');
      fieldset.classList.add('content-fieldset');
    }
  };

  scrollRevealContent = (): void => {
    for (let i = 1; i <= 3; i++) {
      const project = document.getElementById(`project-${i}`);

      if (this.sectionService.isElementPassed(project, 15)) {
        project.classList.remove('hidden');
        project.classList.add('animate__fadeInUp');
      }
    }
  };

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.showMobile();
  }

  showMobile(): void {
    this.mobile = this.mobileService.isMobile();
  }
}
