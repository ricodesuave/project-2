import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApibooksComponent } from './apibooks.component';

describe('ApibooksComponent', () => {
  let component: ApibooksComponent;
  let fixture: ComponentFixture<ApibooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApibooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApibooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
