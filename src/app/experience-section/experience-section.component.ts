import { Component, OnInit, OnDestroy } from '@angular/core';
import { SectionService } from '../section.service';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css'],
})
export class ExperienceSectionComponent implements OnInit {
  constructor(private sectionService: SectionService) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollRevealTitle, true);
    window.addEventListener('scroll', this.scrollRevealContent, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollRevealTitle, true);
    window.removeEventListener('scroll', this.scrollRevealContent, true);
  }

  scrollRevealTitle = (): void => {
    const heading: HTMLElement = document.getElementById('exp-heading');
    const fieldset: HTMLElement = document.getElementById('exp-fieldset');

    if (this.sectionService.isElementPassed(heading, 50)) {
      heading.classList.remove('hidden');
      fieldset.classList.remove('hidden');
      heading.classList.add('animate__fadeInLeft');
      fieldset.classList.add('animate__fadeIn');
      fieldset.classList.add('content-fieldset');
    }
  };

  scrollRevealContent = (): void => {
    for (let i = 1; i <= 2; i++) {
      const image: HTMLElement = document.getElementById(`content-img-${i}`);
      const text: HTMLElement = document.getElementById(`content-text-${i}`);

      if (this.sectionService.isElementPassed(image, 25)) {
        image.classList.remove('hidden');
        text.classList.remove('hidden');
        image.classList.add('animate__fadeInLeft');
        text.classList.add('animate__fadeInUp');
      }
    }
  };
}
