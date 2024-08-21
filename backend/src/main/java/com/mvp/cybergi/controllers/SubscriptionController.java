package com.mvp.cybergi.controllers;

import com.mvp.cybergi.model.entity.Subscription;
import com.mvp.cybergi.services.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/subscriptions")
public class SubscriptionController {

    @Autowired
    private SubscriptionService subscriptionService;

    @PreAuthorize("hasAnyRole('ADMIN', 'EMPLOYER')")
    @PostMapping("/create")
    public ResponseEntity<Subscription> createSubscription(@RequestBody Subscription subscription) {
        return ResponseEntity.ok(subscriptionService.createSubscription(subscription));
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'EMPLOYER')")
    @GetMapping("/all")
    public ResponseEntity<List<Subscription>> getAllSubscriptions() {
        return ResponseEntity.ok(subscriptionService.getAllSubscriptions());
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'EMPLOYER')")
    @GetMapping("/{id}")
    public ResponseEntity<Subscription> getSubscriptionById(@PathVariable Long id) {
        return subscriptionService.getSubscriptionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'EMPLOYER')")
    @GetMapping("/employer/{employerId}")
    public ResponseEntity<List<Subscription>> getSubscriptionsByEmployer(@PathVariable Long employerId) {
        return ResponseEntity.ok(subscriptionService.getSubscriptionsByEmployer(employerId));
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'EMPLOYER')")
    @PutMapping("/update/{id}")
    public ResponseEntity<Subscription> updateSubscription(@PathVariable Long id, @RequestBody Subscription updatedSubscription) {
        return ResponseEntity.ok(subscriptionService.updateSubscription(id, updatedSubscription));
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'EMPLOYER')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteSubscription(@PathVariable Long id) {
        subscriptionService.deleteSubscription(id);
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'EMPLOYER')")
    @DeleteMapping("/delete/all")
    public ResponseEntity<Void> deleteAllSubscriptions() {
        subscriptionService.deleteAllSubscriptions();
        return ResponseEntity.noContent().build();
    }

    // Enroll employees in a subscribed module
    @PreAuthorize("hasRole('EMPLOYER')")
    @PostMapping("/employer/{employerId}/module/{moduleId}/enroll")
    public ResponseEntity<Void> enrollEmployeesInModule(@PathVariable Long employerId, @PathVariable Long moduleId, @RequestBody List<Long> employeeIds) {
        subscriptionService.enrollEmployeesInModule(employerId, moduleId, employeeIds);
        return ResponseEntity.ok().build();
    }
}
