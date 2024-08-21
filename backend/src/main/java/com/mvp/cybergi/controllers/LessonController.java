package com.mvp.cybergi.controllers;

import com.mvp.cybergi.model.entity.Lesson;
import com.mvp.cybergi.model.entity.Module;
import com.mvp.cybergi.services.LessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/lessons")
public class LessonController {

    @Autowired
    private LessonService lessonService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<Lesson> createLesson(@RequestBody Lesson lesson) {
        return ResponseEntity.ok(lessonService.createLesson(lesson));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/all")
    public ResponseEntity<List<Lesson>> getAllLessons() {
        return ResponseEntity.ok(lessonService.getAllLessons());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<Lesson> getLessonById(@PathVariable Long id) {
        return lessonService.getLessonById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}/next")
    public ResponseEntity<Lesson> getNextLesson(@PathVariable Long id) {
        Optional<Lesson> currentLesson = lessonService.getLessonById(id);
        if (currentLesson.isPresent()) {
            Module module = currentLesson.get().getModule();
            List<Lesson> lessons = module.getLessons();
            int currentIndex = lessons.indexOf(currentLesson.get());
            if (currentIndex < lessons.size() - 1) {
                return ResponseEntity.ok(lessons.get(currentIndex + 1));
            }
        }
        return ResponseEntity.notFound().build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<Lesson> updateLesson(@PathVariable Long id, @RequestBody Lesson updatedLesson) {
        return ResponseEntity.ok(lessonService.updateLesson(id, updatedLesson));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteLesson(@PathVariable Long id) {
        lessonService.deleteLesson(id);
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/all")
    public ResponseEntity<Void> deleteAllLessons() {
        lessonService.deleteAllLessons();
        return ResponseEntity.noContent().build();
    }
}
