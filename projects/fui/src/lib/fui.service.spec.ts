import { TestBed } from '@angular/core/testing';

import { FUIService } from './fui.service';

describe('FUIService', () => {
  let service: FUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
