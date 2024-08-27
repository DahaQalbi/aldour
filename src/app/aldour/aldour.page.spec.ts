import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AldourPage } from './aldour.page';

describe('AldourPage', () => {
  let component: AldourPage;
  let fixture: ComponentFixture<AldourPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AldourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
