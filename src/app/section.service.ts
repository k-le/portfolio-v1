import { Injectable } from '@angular/core';
import { ScrollDataService } from 'angular-scroll-animations';

@Injectable({
  providedIn: 'root',
})
export class SectionService {
  constructor(private scrollService: ScrollDataService) {}

  /**
   * Gets the inner height of the window. May remove since function calls make things run slower.
   */
  private getWindowHeight(): number {
    return window.innerHeight;
  }

  /**
   * Determines when an HTMLElement has been seen and passed in the document.
   * @param element HTMLElement to be targeted.
   * @param offsetPercentage Value from 0-100 (percentage) that offsets (based on the element size) when the
   * function will return True.
   */
  isElementPassed(element: HTMLElement, offsetPercentage?: number): boolean {
    const bound = element.getBoundingClientRect();
    const elHeight = element.offsetHeight;
    const offset = elHeight * (offsetPercentage / 100);

    if (offset) {
      return bound.top <= this.getWindowHeight() - offset;
    } else {
      return bound.top <= this.getWindowHeight();
    }
  }

  /**
   * Determines if the HTMLElement is in the viewport.
   * @param element HTMLElement to be targeted.
   * @param offsetPercentage Value from 0-100 (percentage) that offsets (based on the element size) when the
   * function will return True.
   */
  isElementSeen(element: HTMLElement, offsetPercentage?: number): boolean {
    const bound = element.getBoundingClientRect();
    const elHeight = element.offsetHeight;
    const offset = elHeight * (offsetPercentage / 100);

    if (offset) {
      return bound.bottom - offset >= 0;
    } else {
      return bound.bottom >= 0;
    }
  }
}
