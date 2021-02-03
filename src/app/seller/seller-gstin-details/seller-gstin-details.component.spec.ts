import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerGstinDetailsComponent } from './seller-gstin-details.component';

describe('SellerGstinDetailsComponent', () => {
  let component: SellerGstinDetailsComponent;
  let fixture: ComponentFixture<SellerGstinDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerGstinDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerGstinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
