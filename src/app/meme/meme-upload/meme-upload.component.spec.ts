import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeUploadComponent } from './meme-upload.component';

describe('HomeComponent', () => {
  let component: MemeUploadComponent;
  let fixture: ComponentFixture<MemeUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
