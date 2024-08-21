import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {
  quizForm: FormGroup;
  quizId!: number;

  constructor(
    private fb: FormBuilder,
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.quizForm = this.fb.group({
      title: ['', Validators.required],
      questions: this.fb.array([]), // Assuming questions are managed as an array
      lessonId: ['', Validators.required] // Assuming each quiz is associated with a lesson
    });
  }

  ngOnInit(): void {
    this.quizId = +this.route.snapshot.paramMap.get('id')!;
    this.loadQuiz();
  }

  loadQuiz(): void {
    this.quizService.getQuizById(this.quizId).subscribe(quiz => {
      this.quizForm.patchValue(quiz);
    });
  }

  onSubmit(): void {
    if (this.quizForm.valid) {
      this.quizService.updateQuiz(this.quizId, this.quizForm.value).subscribe(() => {
        this.router.navigate(['/quiz-list']);
      });
    }
  }
}
