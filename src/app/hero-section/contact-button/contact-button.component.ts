import { Component, OnInit, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { MobileService } from '../../mobile.service';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.css'],
})
export class ContactButtonComponent implements OnInit {
  mobile: boolean;

  constructor(
    private mobileService: MobileService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.showMobile();
  }

  showMobile(): void {
    this.mobile = this.mobileService.isMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.showMobile();
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
}
