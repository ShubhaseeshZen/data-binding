import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { EventdemoComponent } from './eventdemo/eventdemo.component';
import { InterpolationdemoComponent } from './interpolationdemo/interpolationdemo.component';
import { PropertydemoComponent } from './propertydemo/propertydemo.component';
import { TwowaydemoComponent } from './twowaydemo/twowaydemo.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        EventdemoComponent,
        InterpolationdemoComponent,
        PropertydemoComponent,
        TwowaydemoComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'data-binding'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('data-binding');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('data-binding');
  });
});
