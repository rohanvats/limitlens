import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpscalingGuidePage } from './upscaling-guide.page';

describe('UpscalingGuidePage', () => {
  let component: UpscalingGuidePage;
  let fixture: ComponentFixture<UpscalingGuidePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpscalingGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
