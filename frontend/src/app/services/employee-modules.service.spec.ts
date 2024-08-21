import { TestBed } from '@angular/core/testing';

import { EmployeeModulesService } from './employee-modules.service';

describe('EmployeeModulesService', () => {
  let service: EmployeeModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
