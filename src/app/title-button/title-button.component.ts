import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ContactModalComponent } from '../contact-modal/contact-modal.component';
import { MobileService } from '../mobile.service';
import { Button, fixedButtons, titleButtons } from '../titleButtons';

@Component({
  selector: 'app-title-button',
  templateUrl: './title-button.component.html',
  styleUrls: ['./title-button.component.css'],
})
export class TitleButtonComponent implements OnInit {
  mobile: boolean;
  fixedButtons: Button[] = fixedButtons;
  titleButtons: Button[] = titleButtons;
  showTitleButtons: boolean; // Automatically on for desktop/laptop displays.

  constructor(
    private modalService: NgbModal,
    private mobileService: MobileService
  ) {}

  ngOnInit(): void {
    this.showButtons();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.showButtons();
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

  showButtons(): void {
    this.mobile = this.mobileService.isMobile();
  }
}
