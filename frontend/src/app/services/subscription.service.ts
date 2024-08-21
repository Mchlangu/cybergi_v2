// src/app/services/subscription.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private apiUrl = environment.apiUrl + '/subscriptions';

  constructor(private http: HttpClient) {}

  createSubscription(subscription: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, subscription);
  }

  getAllSubscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getSubscriptionById(subscriptionId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${subscriptionId}`);
  }

  getSubscriptionsByEmployer(employerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/employer/${employerId}`);
  }

  updateSubscription(subscriptionId: number, subscription: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${subscriptionId}`, subscription);
  }

  deleteSubscription(subscriptionId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${subscriptionId}`);
  }

  enrollEmployeesInModule(employerId: number, moduleId: number, employeeIds: number[]): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/employer/${employerId}/module/${moduleId}/enroll`, employeeIds);
  }
}
