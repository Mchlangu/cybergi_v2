// src/app/services/quiz.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = environment.apiUrl + '/quizzes';

  constructor(private http: HttpClient) {}

  createQuiz(quiz: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, quiz);
  }

  getAllQuizzes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getQuizById(quizId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${quizId}`);
  }

  getQuizzesByLesson(lessonId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/lesson/${lessonId}`);
  }

  updateQuiz(quizId: number, quiz: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${quizId}`, quiz);
  }

  deleteQuiz(quizId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${quizId}`);
  }

  submitQuiz(quizId: number, answers: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/${quizId}/submit`, answers);
  }
}
