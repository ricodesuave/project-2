import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubLookupComponent } from './club-lookup.component';

describe('ClubLookupComponent', () => {
  let component: ClubLookupComponent;
  let fixture: ComponentFixture<ClubLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
