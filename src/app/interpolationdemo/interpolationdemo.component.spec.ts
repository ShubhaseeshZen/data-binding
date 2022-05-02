import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationdemoComponent } from './interpolationdemo.component';

describe('InterpolationdemoComponent', () => {
  let component: InterpolationdemoComponent;
  let fixture: ComponentFixture<InterpolationdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
