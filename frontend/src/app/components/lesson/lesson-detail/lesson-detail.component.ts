// src/app/components/lesson-detail/lesson-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from 'src/app/services/lesson-service.service';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {
  lesson: any;

  constructor(
    private lessonService: LessonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const lessonId = +this.route.snapshot.paramMap.get('id')!;
    this.loadLesson(lessonId);
  }

  loadLesson(lessonId: number): void {
    this.lessonService.getLessonById(lessonId).subscribe(lesson => {
      this.lesson = lesson;
    });
  }
}
