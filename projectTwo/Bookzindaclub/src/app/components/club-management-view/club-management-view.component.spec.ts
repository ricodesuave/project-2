import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubManagementViewComponent } from './club-management-view.component';

describe('ClubManagementViewComponent', () => {
  let component: ClubManagementViewComponent;
  let fixture: ComponentFixture<ClubManagementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubManagementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubManagementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
