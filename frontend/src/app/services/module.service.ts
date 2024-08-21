// src/app/services/module.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private apiUrl = environment.apiUrl + '/modules';

  constructor(private http: HttpClient) {}

  createModule(module: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, module);
  }

  getAllModules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getModuleById(moduleId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${moduleId}`);
  }

  updateModule(moduleId: number, module: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${moduleId}`, module);
  }

  deleteModule(moduleId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${moduleId}`);
  }

  getFeaturedModules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/featured`);
  }
}
