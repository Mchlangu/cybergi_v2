// src/app/services/employee-module.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeModuleService {
  private apiUrl = environment.apiUrl + '/employees';

  constructor(private http: HttpClient) {}

  getEnrolledModules(employeeId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${employeeId}/modules`);
  }
}
