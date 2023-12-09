import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeTutorialPage } from './welcome-tutorial.page';

describe('WelcomeTutorialPage', () => {
  let component: WelcomeTutorialPage;
  let fixture: ComponentFixture<WelcomeTutorialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WelcomeTutorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
