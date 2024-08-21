package com.mvp.cybergi.services;

import com.mvp.cybergi.model.entity.Quiz;
import com.mvp.cybergi.model.entity.QuizResult;
import com.mvp.cybergi.model.entity.User;
import com.mvp.cybergi.repository.QuizRepository;
import com.mvp.cybergi.repository.QuizResultRepository;
import com.mvp.cybergi.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuizService {

    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private QuizResultRepository quizResultRepository;

    @Autowired
    private UserRepo userRepo;

    public Quiz createQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Optional<Quiz> getQuizById(Long id) {
        return quizRepository.findById(id);
    }

    public Quiz updateQuiz(Long id, Quiz updatedQuiz) {
        return quizRepository.findById(id)
                .map(quiz -> {
                    quiz.setQuestion(updatedQuiz.getQuestion());
                    quiz.setOptions(updatedQuiz.getOptions());
                    quiz.setCorrectOptionIndex(updatedQuiz.getCorrectOptionIndex());
                    quiz.setQuizType(updatedQuiz.getQuizType());
                    return quizRepository.save(quiz);
                }).orElseThrow(() -> new RuntimeException("Quiz not found"));
    }

    public void deleteQuiz(Long id) {
        quizRepository.deleteById(id);
    }

    public void deleteAllQuizzes() {
        quizRepository.deleteAll();
    }

    public QuizResult submitQuiz(Long quizId, Long userId, List<Integer> userAnswers) {
        // Fetch the quiz and validate existence
        Quiz quiz = quizRepository.findById(quizId)
                .orElseThrow(() -> new RuntimeException("Quiz not found"));

        // Fetch the user
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Find existing result
        Optional<QuizResult> existingResultOpt = quizResultRepository.findByUserIdAndQuizId(userId, quizId);
        QuizResult quizResult;

        if (existingResultOpt.isPresent()) {
            quizResult = existingResultOpt.get();

            // Check the attempt count
            if (quizResult.getAttemptCount() >= 4) {
                throw new RuntimeException("Maximum attempts reached for this quiz.");
            }

            // Increment attempt count
            quizResult.setAttemptCount(quizResult.getAttemptCount() + 1);
        } else {
            quizResult = new QuizResult();
            quizResult.setQuiz(quiz);
            quizResult.setUser(user);
            quizResult.setAttemptCount(1);
        }

        // Calculate score
        int score = calculateScore(quiz, userAnswers);
        quizResult.setScorePercentage(score);
        quizResult.setCompleted(true);

        // Save or update the result
        return quizResultRepository.save(quizResult);
    }

    private int calculateScore(Quiz quiz, List<Integer> userAnswers) {
        int correctAnswers = 0;
        List<String> options = quiz.getOptions();

        for (int i = 0; i < options.size(); i++) {
            if (i == quiz.getCorrectOptionIndex() && userAnswers.contains(i)) {
                correctAnswers++;
            }
        }
        return (correctAnswers * 100) / options.size();
    }
}
