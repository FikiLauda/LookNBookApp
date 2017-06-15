import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccTypeComponent } from './update-acc-type.component';

describe('UpdateAccTypeComponent', () => {
  let component: UpdateAccTypeComponent;
  let fixture: ComponentFixture<UpdateAccTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
