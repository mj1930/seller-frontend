import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerBankDetailsComponent } from './seller-bank-details.component';

describe('SellerBankDetailsComponent', () => {
  let component: SellerBankDetailsComponent;
  let fixture: ComponentFixture<SellerBankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerBankDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
