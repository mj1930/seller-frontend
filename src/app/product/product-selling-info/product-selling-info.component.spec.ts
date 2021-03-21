import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSellingInfoComponent } from './product-selling-info.component';

describe('ProductSellingInfoComponent', () => {
  let component: ProductSellingInfoComponent;
  let fixture: ComponentFixture<ProductSellingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSellingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSellingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
