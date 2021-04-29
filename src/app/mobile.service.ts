import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  mobile: boolean;

  constructor() {}

  isMobile(): boolean {
    if (window.innerWidth <= 997) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }

    return this.mobile;
  }
}
