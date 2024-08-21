package com.mvp.cybergi.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.mvp.cybergi.model.enums.QuizType;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "quizzes")
@Data
@NoArgsConstructor
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String question;

    @ElementCollection
    @CollectionTable(name = "quiz_options", joinColumns = @JoinColumn(name = "quiz_id"))
    @Column(name = "option")
    private List<String> options;

    private int correctOptionIndex; // Index of the correct option (0-3)

    @Enumerated(EnumType.STRING)
    private QuizType quizType;

    @ManyToOne
    @JoinColumn(name = "lesson_id")
    @JsonBackReference
    private Lesson lesson;
}
