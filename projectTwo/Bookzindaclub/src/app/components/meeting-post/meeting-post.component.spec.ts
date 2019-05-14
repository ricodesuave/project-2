import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingPostComponent } from './meeting-post.component';

describe('MeetingPostComponent', () => {
  let component: MeetingPostComponent;
  let fixture: ComponentFixture<MeetingPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
