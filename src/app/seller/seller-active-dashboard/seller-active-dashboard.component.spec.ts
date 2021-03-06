import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerActiveDashboardComponent } from './seller-active-dashboard.component';

describe('SellerActiveDashboardComponent', () => {
  let component: SellerActiveDashboardComponent;
  let fixture: ComponentFixture<SellerActiveDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerActiveDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerActiveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
