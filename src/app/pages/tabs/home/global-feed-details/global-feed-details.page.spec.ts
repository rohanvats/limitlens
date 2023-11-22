import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalFeedDetailsPage } from './global-feed-details.page';

describe('GlobalFeedDetailsPage', () => {
  let component: GlobalFeedDetailsPage;
  let fixture: ComponentFixture<GlobalFeedDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GlobalFeedDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
