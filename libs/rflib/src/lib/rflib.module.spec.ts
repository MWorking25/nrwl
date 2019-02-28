import { async, TestBed } from '@angular/core/testing';
import { RflibModule } from './rflib.module';

describe('RflibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RflibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RflibModule).toBeDefined();
  });
});
