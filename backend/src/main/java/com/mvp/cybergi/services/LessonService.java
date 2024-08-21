package com.mvp.cybergi.services;

import com.mvp.cybergi.model.entity.Lesson;
import com.mvp.cybergi.repository.LessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LessonService {

    @Autowired
    private LessonRepository lessonRepository;

    public Lesson createLesson(Lesson lesson) {
        return lessonRepository.save(lesson);
    }

    public List<Lesson> getAllLessons() {
        return lessonRepository.findAll();
    }

    public Optional<Lesson> getLessonById(Long id) {
        return lessonRepository.findById(id);
    }

    public Lesson updateLesson(Long id, Lesson updatedLesson) {
        return lessonRepository.findById(id)
                .map(lesson -> {
                    lesson.setTitle(updatedLesson.getTitle());
                    lesson.setContent(updatedLesson.getContent());
                    lesson.setContentType(updatedLesson.getContentType());
                    lesson.setMediaUrl(updatedLesson.getMediaUrl());

                    // Clear the existing quizzes and add the updated quizzes
                    lesson.getQuizzes().clear();
                    if (updatedLesson.getQuizzes() != null) {
                        lesson.getQuizzes().addAll(updatedLesson.getQuizzes());
                        lesson.getQuizzes().forEach(quiz -> quiz.setLesson(lesson));
                    }

                    return lessonRepository.save(lesson);
                }).orElseThrow(() -> new RuntimeException("Lesson not found"));
    }


    public void deleteLesson(Long id) {
        lessonRepository.deleteById(id);
    }

    public void deleteAllLessons() {
        lessonRepository.deleteAll();
    }
}
