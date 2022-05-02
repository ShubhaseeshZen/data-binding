import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertydemoComponent } from './propertydemo.component';

describe('PropertydemoComponent', () => {
  let component: PropertydemoComponent;
  let fixture: ComponentFixture<PropertydemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertydemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertydemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
