import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from 'src/app/services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent {

quizForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private quizService: QuizService,
    private router: Router
  ) {
    this.quizForm = this.fb.group({
      title: ['', Validators.required],
      questions: this.fb.array([]), // Assuming questions are managed as an array
      lessonId: ['', Validators.required] // Assuming each quiz is associated with a lesson
    });
  }

  onSubmit(): void {
    if (this.quizForm.valid) {
      this.quizService.createQuiz(this.quizForm.value).subscribe(() => {
        this.router.navigate(['/quiz-list']);
      });
    }
  }
}