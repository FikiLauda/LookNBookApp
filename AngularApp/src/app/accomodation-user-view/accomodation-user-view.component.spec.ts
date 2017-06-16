import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationUserViewComponent } from './accomodation-user-view.component';

describe('AccomodationUserViewComponent', () => {
  let component: AccomodationUserViewComponent;
  let fixture: ComponentFixture<AccomodationUserViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationUserViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
