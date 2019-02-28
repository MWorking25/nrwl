import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountsDashComponent } from './counts-dash.component';

describe('CountsDashComponent', () => {
  let component: CountsDashComponent;
  let fixture: ComponentFixture<CountsDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountsDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
