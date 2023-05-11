import { TestBed } from '@angular/core/testing';

import { MathGPTService } from './math-gpt.service';

describe('MathGPTService', () => {
  let service: MathGPTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathGPTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
