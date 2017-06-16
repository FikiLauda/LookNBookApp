import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationUserListComponentComponent } from './accomodation-user-list-component.component';

describe('AccomodationUserListComponentComponent', () => {
  let component: AccomodationUserListComponentComponent;
  let fixture: ComponentFixture<AccomodationUserListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationUserListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationUserListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
