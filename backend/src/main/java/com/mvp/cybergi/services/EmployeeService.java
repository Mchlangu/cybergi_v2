package com.mvp.cybergi.services;

import com.mvp.cybergi.model.entity.Module;
import com.mvp.cybergi.model.entity.Subscription;
import com.mvp.cybergi.model.entity.User;
import com.mvp.cybergi.repository.SubscriptionRepository;
import com.mvp.cybergi.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    public List<Module> getEnrolledModules(Long employeeId) {
        User employee = userRepo.findById(employeeId)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        return subscriptionRepository.findByEmployerId(employee.getEmployer().getId())
                .stream()
                .filter(subscription -> subscription.getModule() != null)
                .map(Subscription::getModule)
                .collect(Collectors.toList());
    }
}
