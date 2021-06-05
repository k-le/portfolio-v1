import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css'],
})
export class ContactModalComponent implements OnInit {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  constructor(public activeModal: NgbActiveModal, private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (this.name && this.email && this.subject && this.message) {
      alert('Submitted!');
      this.http
        .post(
          'https://formspree.io/f/mnqlqngv',
          {
            name: this.name,
            replyto: this.email,
            subject: this.subject,
            message: this.message,
          },
          { headers: headers }
        )
        .subscribe((response) => {
          alert(response);
        });
    }
  }
}
