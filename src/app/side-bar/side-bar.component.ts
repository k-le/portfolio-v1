import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { ScrollDataService } from 'angular-scroll-animations';
import { Section, sectionIds } from '../sectionIds';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  sections: Section[] = sectionIds;

  selectedSection: Section = this.sections[0];

  constructor(private scrollService: ScrollDataService) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  /**
   * Scroll event for highlighting the side-bar sections.
   * TODO:
   * Change the code so that instead of having a conditional
   * based off of the window height, check the bound.top value
   * of each of the element or find the position of the element
   * in the document and compare the scrollPosition to that.
   *
   * This needs to be done so that when I implement the toggle
   * features on the projects and education sections and the
   * the sections *grow*, it needs to be dynamic and flexible
   * rather than how rigid it is now.
   */
  scroll = (): void => {
    const scrollPosition = this.scrollService.scrollPosition;
    const windowHeight = window.innerHeight;
    if (
      scrollPosition >= 0 &&
      scrollPosition <= windowHeight - windowHeight * 0.2
    ) {
      this.selectedSection = this.sections[0];
    } else if (
      scrollPosition > windowHeight - windowHeight * 0.2 &&
      scrollPosition <= windowHeight * 2 - windowHeight * 0.2
    ) {
      this.selectedSection = this.sections[1];
    } else {
      this.selectedSection = this.sections[2];
    }
  };

  /**
   * Highlights the side-bar section that the User clicked
   * on and jumps to that corresponding section.
   * @param section Section that the User wants to jump to.
   */
  goToSection(section: Section) {
    this.selectedSection = section;
    const element = document.getElementById(`${section.id}`);
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
