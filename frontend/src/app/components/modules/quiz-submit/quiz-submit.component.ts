// src/app/components/quiz-submit/quiz-submit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz-submit',
  templateUrl: './quiz-submit.component.html',
  styleUrls: ['./quiz-submit.component.scss']
})
export class QuizSubmitComponent implements OnInit {
  quizForm: FormGroup;
  quizId!: number;

  constructor(
    private fb: FormBuilder,
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.quizForm = this.fb.group({
      answers: this.fb.array([]) // Array to hold user answers
    });
  }

  ngOnInit(): void {
    this.quizId = +this.route.snapshot.paramMap.get('id')!;
    this.loadQuiz();
  }

  loadQuiz(): void {
    this.quizService.getQuizById(this.quizId).subscribe(quiz => {
      // Populate the form with the quiz questions
      const answersArray = this.quizForm.get('answers') as FormArray;
      quiz.questions.forEach(() => {
        answersArray.push(this.fb.control('', Validators.required));
      });
    });
  }

  onSubmit(): void {
    if (this.quizForm.valid) {
      this.quizService.submitQuiz(this.quizId, this.quizForm.value.answers).subscribe(() => {
        this.router.navigate(['/quiz-list']);
      });
    }
  }
}
