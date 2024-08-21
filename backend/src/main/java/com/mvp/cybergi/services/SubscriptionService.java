package com.mvp.cybergi.services;

import com.mvp.cybergi.model.entity.Subscription;
import com.mvp.cybergi.model.entity.User;
import com.mvp.cybergi.repository.SubscriptionRepository;
import com.mvp.cybergi.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private EmailService emailService;

    public boolean isSubscribed(Long employerId, Long moduleId) {
        return subscriptionRepository.findByEmployerIdAndModuleId(employerId, moduleId).isPresent();
    }

    public Subscription createSubscription(Subscription subscription) {
        return subscriptionRepository.save(subscription);
    }

    public List<Subscription> getAllSubscriptions() {
        return subscriptionRepository.findAll();
    }

    public List<Subscription> getSubscriptionsByEmployer(Long employerId) {
        return subscriptionRepository.findByEmployerId(employerId);
    }

    public Optional<Subscription> getSubscriptionById(Long id) {
        return subscriptionRepository.findById(id);
    }

    public Subscription updateSubscription(Long id, Subscription updatedSubscription) {
        return subscriptionRepository.findById(id)
                .map(subscription -> {
                    subscription.setEmployer(updatedSubscription.getEmployer());
                    subscription.setModule(updatedSubscription.getModule());
                    return subscriptionRepository.save(subscription);
                }).orElseThrow(() -> new RuntimeException("Subscription not found"));
    }

    public void deleteSubscription(Long id) {
        subscriptionRepository.deleteById(id);
    }

    public void deleteAllSubscriptions() {
        subscriptionRepository.deleteAll();
    }

    // Enroll employees in a subscribed module
    public void enrollEmployeesInModule(Long employerId, Long moduleId, List<Long> employeeIds) {
        // Ensure the employer is subscribed to the module
        Optional<Subscription> subscription = subscriptionRepository.findByEmployerIdAndModuleId(employerId, moduleId);
        if (subscription.isPresent()) {
            for (Long employeeId : employeeIds) {
                userRepo.findById(employeeId)
                        .filter(employee -> employee.getEmployer().getId().equals(employerId))  // Ensure the employee belongs to the employer
                        .ifPresent(employee -> {
                            // Send enrollment email to employee
                            sendEnrollmentEmail(employee, subscription.get().getModule().getTitle());
                        });
            }
        } else {
            throw new RuntimeException("Employer is not subscribed to the module.");
        }
    }

    private void sendEnrollmentEmail(User employee, String moduleTitle) {
        String subject = "Enrollment in Module: " + moduleTitle;
        String text = String.format("Dear %s,\n\nYou have been enrolled in the module '%s'.\n\nPlease log in to your account to access the module.\n\nBest regards,\nCyberGI Team",
                employee.getUsername(), moduleTitle);
        emailService.sendSimpleMessage(employee.getEmail(), subject, text);
    }
}
