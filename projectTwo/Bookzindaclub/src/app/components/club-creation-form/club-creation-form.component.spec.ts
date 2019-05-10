import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubCreationFormComponent } from './club-creation-form.component';

describe('ClubCreationFormComponent', () => {
  let component: ClubCreationFormComponent;
  let fixture: ComponentFixture<ClubCreationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubCreationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
