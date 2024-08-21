import { TestBed } from '@angular/core/testing';

import { EmployeeModuleService } from './employee-module.service';

describe('EmployeeModuleService', () => {
  let service: EmployeeModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
