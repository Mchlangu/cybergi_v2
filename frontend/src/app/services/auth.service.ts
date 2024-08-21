// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/auth';
  private rolesSubject = new BehaviorSubject<string[]>([]);
  private employerIdSubject = new BehaviorSubject<number | null>(null); // Employer ID subject
  private employeeIdSubject = new BehaviorSubject<number | null>(null); // Employee ID subject

  roles$ = this.rolesSubject.asObservable();
  employerId$ = this.employerIdSubject.asObservable(); // Observable for employer ID
  employeeId$ = this.employeeIdSubject.asObservable(); // Observable for employee ID

  constructor(private http: HttpClient, private router: Router) {}

  signIn(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, credentials, { withCredentials: true });
  }

  signUp(data: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, data, { withCredentials: true });
  }

  signOut(): Observable<any> {
    return this.http.post(`${this.apiUrl}/signout`, {}, { withCredentials: true });
  }

  handleAuthenticationResponse(response: any): void {
    console.log('Authentication Response:', response); // Debugging line
  
    const roles = response.roles || [];
    this.rolesSubject.next(roles); // Update the BehaviorSubject with roles
  
    if (roles.includes('ROLE_EMPLOYER')) {
      this.employerIdSubject.next(response.id); // Use the id field for employer ID
      console.log('Employer ID stored:', response.id); // Debugging line
      this.employeeIdSubject.next(null); // Clear employee ID if role is employer
    } else if (roles.includes('ROLE_EMPLOYEE')) {
      this.employeeIdSubject.next(response.id); // Use the id field for employee ID
      console.log('Employee ID stored:', response.id); // Debugging line
      this.employerIdSubject.next(null); // Clear employer ID if role is employee
    } else {
      this.employerIdSubject.next(null); // Clear both IDs if not employer or employee
      this.employeeIdSubject.next(null);
    }
  
    // Perform routing based on the role
    if (roles.includes('ROLE_ADMIN')) {
      this.router.navigate(['/admin-dashboard']);
    } else if (roles.includes('ROLE_EMPLOYER')) {
      this.router.navigate(['/employer-dashboard']);
    } else if (roles.includes('ROLE_EMPLOYEE')) {
      this.router.navigate(['/employee-dashboard']);
    } else {
      this.router.navigate(['/default-dashboard']);
    }
  }
  

  // Method to retrieve stored roles
  getUserRoles(): Observable<string[]> {
    return this.roles$;
  }

  // Method to retrieve the stored employer ID
  getEmployerId(): Observable<number | null> {
    return this.employerId$;
  }

  // Method to retrieve the stored employee ID
  getEmployeeId(): Observable<number | null> {
    return this.employeeId$;
  }
}
