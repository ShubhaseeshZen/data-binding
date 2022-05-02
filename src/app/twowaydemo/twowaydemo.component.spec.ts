import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaydemoComponent } from './twowaydemo.component';

describe('TwowaydemoComponent', () => {
  let component: TwowaydemoComponent;
  let fixture: ComponentFixture<TwowaydemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowaydemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaydemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
