// src/app/services/lesson.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private apiUrl = environment.apiUrl + '/lessons';

  constructor(private http: HttpClient) {}

  createLesson(lesson: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, lesson);
  }

  getAllLessons(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getLessonById(lessonId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${lessonId}`);
  }

  updateLesson(lessonId: number, lesson: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${lessonId}`, lesson);
  }

  deleteLesson(lessonId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${lessonId}`);
  }

  getNextLesson(lessonId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${lessonId}/next`);
  }
}
