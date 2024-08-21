// src/app/components/employee-list/employee-list.component.ts
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  employerId!: number | null;

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getEmployerId().subscribe(employerId => {
      if (employerId) {
        this.employerId = employerId;
        this.loadEmployees();
      }
    });
  }

  loadEmployees(): void {
    if (this.employerId) {
      this.employeeService.getAllEmployees(this.employerId).subscribe(employees => {
        this.employees = employees;
      });
    }
  }
}
