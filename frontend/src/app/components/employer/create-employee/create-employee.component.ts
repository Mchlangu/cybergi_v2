import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {
  employeeForm: FormGroup;
  employerId!: number | null;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private authService: AuthService,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['EMPLOYEE', Validators.required] // Assuming the role is always EMPLOYEE
    });

    this.authService.getEmployerId().subscribe(employerId => {
      this.employerId = employerId;
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid && this.employerId) {
      this.employeeService.createEmployee(this.employerId, this.employeeForm.value).subscribe(() => {
        this.router.navigate(['/employee-list']);
      });
    }
  }
}