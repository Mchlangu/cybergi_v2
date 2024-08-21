import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LessonService } from 'src/app/services/lesson-service.service';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.scss']
})
export class CreateLessonComponent {
  lessonForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private lessonService: LessonService,
    private router: Router
  ) {
    this.lessonForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      moduleId: ['', Validators.required], // Assuming each lesson is associated with a module
      contentType: ['', Validators.required] // Type of content: text, video, audio, image
    });
  }

  onSubmit(): void {
    if (this.lessonForm.valid) {
      this.lessonService.createLesson(this.lessonForm.value).subscribe(() => {
        this.router.navigate(['/lesson-list']);
      });
    }
  }
}
