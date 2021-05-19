import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifiedSellerComponent } from './unverified-seller.component';

describe('UnverifiedSellerComponent', () => {
  let component: UnverifiedSellerComponent;
  let fixture: ComponentFixture<UnverifiedSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnverifiedSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnverifiedSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
