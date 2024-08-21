package com.mvp.cybergi.controllers;

import com.mvp.cybergi.model.entity.Lesson;
import com.mvp.cybergi.model.entity.Quiz;
import com.mvp.cybergi.model.entity.QuizResult;
import com.mvp.cybergi.services.LessonService;
import com.mvp.cybergi.services.QuizService;
import com.mvp.cybergi.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/quizzes")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @Autowired
    private LessonService lessonService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<Quiz> createQuiz(@RequestBody Quiz quiz) {
        return ResponseEntity.ok(quizService.createQuiz(quiz));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/all")
    public ResponseEntity<List<Quiz>> getAllQuizzes() {
        return ResponseEntity.ok(quizService.getAllQuizzes());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<Quiz> getQuizById(@PathVariable Long id) {
        return quizService.getQuizById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/lesson/{id}")
    public ResponseEntity<List<Quiz>> getQuizByLesson(@PathVariable Long id) {
        Optional<Lesson> lesson = lessonService.getLessonById(id);
        if (lesson.isPresent()) {
            return ResponseEntity.ok(lesson.get().getQuizzes());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{id}/submit")
    public ResponseEntity<QuizResult> submitQuiz(@PathVariable Long id, @RequestBody List<Integer> answers) {
        Long userId = getAuthenticatedUserId();  // Fetch the authenticated user's ID
        QuizResult quizResult = quizService.submitQuiz(id, userId, answers);
        return ResponseEntity.ok(quizResult);
    }

    private Long getAuthenticatedUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        return userDetails.getId();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<Quiz> updateQuiz(@PathVariable Long id, @RequestBody Quiz updatedQuiz) {
        return ResponseEntity.ok(quizService.updateQuiz(id, updatedQuiz));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteQuiz(@PathVariable Long id) {
        quizService.deleteQuiz(id);
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/all")
    public ResponseEntity<Void> deleteAllQuizzes() {
        quizService.deleteAllQuizzes();
        return ResponseEntity.noContent().build();
    }
}
