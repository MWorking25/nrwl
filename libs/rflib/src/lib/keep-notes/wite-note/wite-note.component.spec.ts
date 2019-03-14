import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiteNoteComponent } from './wite-note.component';

describe('WiteNoteComponent', () => {
  let component: WiteNoteComponent;
  let fixture: ComponentFixture<WiteNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiteNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiteNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
