import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLookupComponent } from './book-lookup.component';

describe('BookLookupComponent', () => {
  let component: BookLookupComponent;
  let fixture: ComponentFixture<BookLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
