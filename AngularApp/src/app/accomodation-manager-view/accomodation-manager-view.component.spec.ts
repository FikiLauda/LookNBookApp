import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationManagerViewComponent } from './accomodation-manager-view.component';

describe('AccomodationManagerViewComponent', () => {
  let component: AccomodationManagerViewComponent;
  let fixture: ComponentFixture<AccomodationManagerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationManagerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationManagerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
