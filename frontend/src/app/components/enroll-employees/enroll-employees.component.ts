// src/app/components/enroll-employees/enroll-employees.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enroll-employees',
  templateUrl: './enroll-employees.component.html',
  styleUrls: ['./enroll-employees.component.scss']
})
export class EnrollEmployeesComponent implements OnInit {
  enrollForm: FormGroup;
  employees: any[] = [];
  employerId!: number | null;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private subscriptionService: SubscriptionService,
    private authService: AuthService,
    private router: Router
  ) {
    this.enrollForm = this.fb.group({
      moduleId: ['', Validators.required], // Module in which employees will be enrolled
      employeeIds: ['', Validators.required], // Employee IDs to enroll
    });

    this.authService.getEmployerId().subscribe(employerId => {
      this.employerId = employerId;
    });
  }

  ngOnInit(): void {
    if (this.employerId) {
      this.loadEmployees();
    }
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees(this.employerId!).subscribe(employees => {
      this.employees = employees;
    });
  }

  onSubmit(): void {
    if (this.enrollForm.valid && this.employerId) {
      const { moduleId, employeeIds } = this.enrollForm.value;
      this.subscriptionService.enrollEmployeesInModule(this.employerId, moduleId, employeeIds).subscribe(() => {
        this.router.navigate(['/subscription-list']);
      });
    }
  }
}
