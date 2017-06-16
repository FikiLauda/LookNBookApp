import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccAdminListComponent } from './acc-admin-list.component';

describe('AccAdminListComponent', () => {
  let component: AccAdminListComponent;
  let fixture: ComponentFixture<AccAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
