import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailHeadingComponent } from './product-detail-heading.component';

describe('ProductDetailHeadingComponent', () => {
  let component: ProductDetailHeadingComponent;
  let fixture: ComponentFixture<ProductDetailHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
