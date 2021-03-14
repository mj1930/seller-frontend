import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNavTabsComponent } from './product-nav-tabs.component';

describe('ProductNavTabsComponent', () => {
  let component: ProductNavTabsComponent;
  let fixture: ComponentFixture<ProductNavTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNavTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNavTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
