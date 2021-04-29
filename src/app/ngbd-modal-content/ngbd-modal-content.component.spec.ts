import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdModalContentComponent } from './ngbd-modal-content.component';

describe('NgbdModalContentComponent', () => {
  let component: NgbdModalContentComponent;
  let fixture: ComponentFixture<NgbdModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
