import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccAdminViewComponent } from './acc-admin-view.component';

describe('AccAdminViewComponent', () => {
  let component: AccAdminViewComponent;
  let fixture: ComponentFixture<AccAdminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccAdminViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
