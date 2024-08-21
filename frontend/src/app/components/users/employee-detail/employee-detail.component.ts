// src/app/components/employee-detail/employee-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  employee: any;
  employerId!: number | null;
  employeeId!: number;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

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
        this.employee = employee;
      });
    }
  }
}