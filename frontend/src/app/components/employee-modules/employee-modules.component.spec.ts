import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeModulesComponent } from './employee-modules.component';

describe('EmployeeModulesComponent', () => {
  let component: EmployeeModulesComponent;
  let fixture: ComponentFixture<EmployeeModulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeModulesComponent]
    });
    fixture = TestBed.createComponent(EmployeeModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
