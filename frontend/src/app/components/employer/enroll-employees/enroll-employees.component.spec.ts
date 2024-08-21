import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollEmployeesComponent } from './enroll-employees.component';

describe('EnrollEmployeesComponent', () => {
  let component: EnrollEmployeesComponent;
  let fixture: ComponentFixture<EnrollEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollEmployeesComponent]
    });
    fixture = TestBed.createComponent(EnrollEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
