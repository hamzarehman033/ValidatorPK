import { TestBed } from '@angular/core/testing';

import { ValidatorPKService } from './validator-pk.service';

describe('ValidatorPKService', () => {
  let service: ValidatorPKService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorPKService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
