import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorScaleBarComponent } from './color-scale-bar.component';

describe('ColorScaleBarComponent', () => {
  let component: ColorScaleBarComponent;
  let fixture: ComponentFixture<ColorScaleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorScaleBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorScaleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
