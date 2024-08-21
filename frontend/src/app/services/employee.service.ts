// src/app/services/employee.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = environment.apiUrl + '/employees';

  constructor(private http: HttpClient) {}

  createEmployee(employerId: number, employee: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/employer/${employerId}/employees`, employee);
  }

  getAllEmployees(employerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/employer/${employerId}/employees`);
  }

  getEmployeeById(employerId: number, employeeId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/employer/${employerId}/employees/${employeeId}`);
  }

  updateEmployee(employerId: number, employeeId: number, employee: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/employer/${employerId}/employees/${employeeId}`, employee);
  }

  deleteEmployee(employerId: number, employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/employer/${employerId}/employees/${employeeId}`);
  }
}
