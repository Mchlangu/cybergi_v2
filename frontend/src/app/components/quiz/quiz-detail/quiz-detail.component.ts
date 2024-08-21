// src/app/components/quiz-detail/quiz-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent implements OnInit {
  quiz: any;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const quizId = +this.route.snapshot.paramMap.get('id')!;
    this.loadQuiz(quizId);
  }

  loadQuiz(quizId: number): void {
    this.quizService.getQuizById(quizId).subscribe(quiz => {
      this.quiz = quiz;
    });
  }
}
