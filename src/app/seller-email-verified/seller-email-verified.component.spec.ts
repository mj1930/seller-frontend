import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerEmailVerifiedComponent } from './seller-email-verified.component';

describe('SellerEmailVerifiedComponent', () => {
  let component: SellerEmailVerifiedComponent;
  let fixture: ComponentFixture<SellerEmailVerifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerEmailVerifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerEmailVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
