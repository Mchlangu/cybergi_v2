// src/app/components/employee-modules/employee-modules.component.ts
import { Component, OnInit } from '@angular/core';
import { EmployeeModuleService } from 'src/app/services/employee-module.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employee-modules',
  templateUrl: './employee-modules.component.html',
  styleUrls: ['./employee-modules.component.scss']
})
export class EmployeeModulesComponent implements OnInit {
  modules: any[] = [];
  employeeId!: number | null;

  constructor(
    private employeeModuleService: EmployeeModuleService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    console.log('EmployeeModulesComponent initialized');
  
    setTimeout(() => {
      this.authService.getEmployeeId().subscribe(employeeId => {
        console.log('Retrieved Employee ID after delay:', employeeId); // Debugging line
        if (employeeId) {
          this.employeeId = employeeId;
          this.loadEnrolledModules();
        } else {
          console.log('Employee ID is null or not available');
        }
      });
    }, 1000); // 1-second delay
  }
  

  loadEnrolledModules(): void {
    if (this.employeeId) {
      this.employeeModuleService.getEnrolledModules(this.employeeId).subscribe(
        (modules) => {
          console.log('Modules:', modules); // Debugging line to check fetched modules
          this.modules = modules;
        },
        (error) => {
          console.error('Error fetching modules:', error); // Debugging line to catch errors
        }
      );
    }
  }
}
