import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPanelComponent } from './manager-panel.component';

describe('ManagerPanelComponent', () => {
  let component: ManagerPanelComponent;
  let fixture: ComponentFixture<ManagerPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
