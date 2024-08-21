package com.mvp.cybergi.model.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "subscriptions")
@Data
@NoArgsConstructor
public class Subscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "employer_id", nullable = false)
    private User employer;  // Linking to the User entity with ROLE_EMPLOYER

    @ManyToOne
    @JoinColumn(name = "module_id", nullable = false)
    private Module module;
}
