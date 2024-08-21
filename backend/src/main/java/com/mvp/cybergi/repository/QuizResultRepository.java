package com.mvp.cybergi.repository;

import com.mvp.cybergi.model.entity.QuizResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuizResultRepository extends JpaRepository<QuizResult, Long> {
    List<QuizResult> findByUserIdAndQuiz_Lesson_Module_Id(Long userId, Long moduleId);
    Optional<QuizResult> findByUserIdAndQuizId(Long userId, Long quizId);
}
