import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalytsDashComponent } from './analyts-dash.component';

describe('AnalytsDashComponent', () => {
  let component: AnalytsDashComponent;
  let fixture: ComponentFixture<AnalytsDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalytsDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalytsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
