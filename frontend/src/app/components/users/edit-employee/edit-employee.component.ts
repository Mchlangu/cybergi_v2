// src/app/components/employee-edit/employee-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employerId!: number | null;
  employeeId!: number;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['EMPLOYEE', Validators.required] // Assuming the role is always EMPLOYEE
    });
  }

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.paramMap.get('employeeId')!;
    this.authService.getEmployerId().subscribe(employerId => {
      if (employerId) {
        this.employerId = employerId;
        this.loadEmployee();
      }
    });
  }

  loadEmployee(): void {
    if (this.employerId) {
      this.employeeService.getEmployeeById(this.employerId, this.employeeId).subscribe(employee => {
        this.employeeForm.patchValue(employee);
      });
    }
  }

  onSubmit(): void {
    if (this.employeeForm.valid && this.employerId) {
      this.employeeService.updateEmployee(this.employerId, this.employeeId, this.employeeForm.value).subscribe(() => {
        this.router.navigate(['/employee-list']);
      });
    }
  }
}