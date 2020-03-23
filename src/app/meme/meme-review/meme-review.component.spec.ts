import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeReviewComponent } from './meme-review.component';

describe('HomeComponent', () => {
  let component: MemeReviewComponent;
  let fixture: ComponentFixture<MemeReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
