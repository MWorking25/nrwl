import { TestBed } from '@angular/core/testing';

import { KeepNotesService } from './keep-notes.service';

describe('KeepNotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeepNotesService = TestBed.get(KeepNotesService);
    expect(service).toBeTruthy();
  });
});
