import { TestBed } from '@angular/core/testing';

import { FormsValidationService } from './forms-validation.service';

describe('FormsValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormsValidationService = TestBed.get(FormsValidationService);
    expect(service).toBeTruthy();
  });

  it('should fire invalid number', () =>{
    const service: FormsValidationService = TestBed.get(FormsValidationService);
    let result = service.validateNumber('asdasdasd');
    expect(result).toBeFalsy();
  });
});
