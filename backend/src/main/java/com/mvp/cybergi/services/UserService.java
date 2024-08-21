package com.mvp.cybergi.services;

import com.mvp.cybergi.model.entity.User;
import com.mvp.cybergi.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EmailService emailService;

    public User createUser(User user) {
        // Capture the raw password before encoding
        String rawPassword = user.getPassword();

        // Encode the password before saving the user
        user.setPassword(passwordEncoder.encode(rawPassword));
        User savedUser = userRepo.save(user);

        // Send email to the user with their username and raw password
        sendWelcomeEmail(savedUser, rawPassword);

        return savedUser;
    }

    public User updateUser(Long id, User updatedUser) {
        return userRepo.findById(id)
                .map(user -> {
                    user.setUsername(updatedUser.getUsername());
                    user.setEmail(updatedUser.getEmail());

                    // Only update the password if it is provided
                    if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
                        String rawPassword = updatedUser.getPassword();
                        user.setPassword(passwordEncoder.encode(rawPassword));
                        sendWelcomeEmail(user, rawPassword);  // Send email with the raw password
                    }

                    user.setRoles(updatedUser.getRoles());
                    return userRepo.save(user);
                })
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepo.findById(id);
    }

    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }

    // Employer-specific operations

    public User createEmployeeForEmployer(Long employerId, User employee) {
        return userRepo.findById(employerId)
                .map(employer -> {
                    employee.setEmployer(employer);  // Set the employer

                    // Capture the raw password before encoding
                    String rawPassword = employee.getPassword();

                    // Encode the password before saving the employee
                    employee.setPassword(passwordEncoder.encode(rawPassword));
                    User savedEmployee = userRepo.save(employee);

                    // Send email to the employee with their username and raw password
                    sendWelcomeEmail(savedEmployee, rawPassword);

                    return savedEmployee;
                })
                .orElseThrow(() -> new RuntimeException("Employer not found"));
    }

    public List<User> getAllEmployeesForEmployer(Long employerId) {
        return userRepo.findByEmployerId(employerId);
    }

    public Optional<User> getEmployeeByIdForEmployer(Long employerId, Long employeeId) {
        return userRepo.findById(employeeId)
                .filter(employee -> employee.getEmployer().getId().equals(employerId));  // Ensure the employee belongs to the employer
    }

    public User updateEmployeeForEmployer(Long employerId, Long employeeId, User updatedEmployee) {
        return userRepo.findById(employeeId)
                .filter(employee -> employee.getEmployer().getId().equals(employerId))  // Ensure the employee belongs to the employer
                .map(employee -> {
                    employee.setUsername(updatedEmployee.getUsername());
                    employee.setEmail(updatedEmployee.getEmail());

                    // Only update the password if it is provided
                    if (updatedEmployee.getPassword() != null && !updatedEmployee.getPassword().isEmpty()) {
                        String rawPassword = updatedEmployee.getPassword();
                        employee.setPassword(passwordEncoder.encode(rawPassword));
                        sendWelcomeEmail(employee, rawPassword);  // Send email with the raw password
                    }

                    employee.setRoles(updatedEmployee.getRoles());
                    return userRepo.save(employee);
                })
                .orElseThrow(() -> new RuntimeException("Employee not found"));
    }

    public void deleteEmployeeForEmployer(Long employerId, Long employeeId) {
        userRepo.findById(employeeId)
                .filter(employee -> employee.getEmployer().getId().equals(employerId))  // Ensure the employee belongs to the employer
                .ifPresent(userRepo::delete);
    }

    private void sendWelcomeEmail(User user, String rawPassword) {
        String subject = "Welcome to CyberGI!";
        String text = String.format("Dear %s,\n\nYour account has been created successfully.\n\nUsername: %s\nPassword: %s\n\nPlease keep this information secure.\n\nBest regards,\nCyberGI Team",
                user.getUsername(), user.getUsername(), rawPassword);
        emailService.sendSimpleMessage(user.getEmail(), subject, text);
    }
}
