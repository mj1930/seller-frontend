import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerWelcomePageComponent } from './seller-welcome-page.component';

describe('SellerWelcomePageComponent', () => {
  let component: SellerWelcomePageComponent;
  let fixture: ComponentFixture<SellerWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerWelcomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
