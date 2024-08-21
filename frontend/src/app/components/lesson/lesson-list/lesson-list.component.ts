// src/app/components/lesson-list/lesson-list.component.ts
import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/services/lesson-service.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {
  lessons: any[] = [];

  constructor(private lessonService: LessonService) {}

  ngOnInit(): void {
    this.loadLessons();
  }

  loadLessons(): void {
    this.lessonService.getAllLessons().subscribe(lessons => {
      this.lessons = lessons;
    });
  }
}
