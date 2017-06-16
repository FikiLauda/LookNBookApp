import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomUserViewComponent } from './room-user-view.component';

describe('RoomUserViewComponent', () => {
  let component: RoomUserViewComponent;
  let fixture: ComponentFixture<RoomUserViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomUserViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
