package com.mvp.cybergi.repository;

import com.mvp.cybergi.model.entity.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findByEmployerId(Long employerId);
    List<Subscription> findByModuleId(Long moduleId);
    Optional<Subscription> findByEmployerIdAndModuleId(Long employerId, Long moduleId);
}
