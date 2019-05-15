import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubMeetingTableComponent } from './club-meeting-table.component';

describe('ClubMeetingTableComponent', () => {
  let component: ClubMeetingTableComponent;
  let fixture: ComponentFixture<ClubMeetingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubMeetingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubMeetingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
