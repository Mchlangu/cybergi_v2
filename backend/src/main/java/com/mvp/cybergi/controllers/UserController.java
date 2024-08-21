package com.mvp.cybergi.controllers;

import com.mvp.cybergi.model.entity.User;
import com.mvp.cybergi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Create a new user (Admin only)
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.createUser(user);
        return ResponseEntity.ok(savedUser);
    }

    // Get all users (Admin only)
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    // Get a user by ID (Admin only)
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        Optional<User> user = userService.getUserById(userId);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update an existing user (Admin only)
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{userId}")
    public ResponseEntity<User> updateUser(@PathVariable Long userId, @RequestBody User updatedUser) {
        User savedUser = userService.updateUser(userId, updatedUser);
        return ResponseEntity.ok(savedUser);
    }

    // Delete a user by ID (Admin only)
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }

    // Create a new employee for an employer
    @PreAuthorize("hasRole('EMPLOYER')")
    @PostMapping("/employer/{employerId}/employees")
    public ResponseEntity<User> createEmployee(@PathVariable Long employerId, @RequestBody User employee) {
        User savedEmployee = userService.createEmployeeForEmployer(employerId, employee);
        return ResponseEntity.ok(savedEmployee);
    }

    // Get all employees for an employer
    @PreAuthorize("hasRole('EMPLOYER')")
    @GetMapping("/employer/{employerId}/employees")
    public ResponseEntity<List<User>> getAllEmployeesForEmployer(@PathVariable Long employerId) {
        List<User> employees = userService.getAllEmployeesForEmployer(employerId);
        return ResponseEntity.ok(employees);
    }

    // Get an employee by ID for an employer
    @PreAuthorize("hasRole('EMPLOYER')")
    @GetMapping("/employer/{employerId}/employees/{employeeId}")
    public ResponseEntity<User> getEmployeeByIdForEmployer(@PathVariable Long employerId, @PathVariable Long employeeId) {
        Optional<User> employee = userService.getEmployeeByIdForEmployer(employerId, employeeId);
        return employee.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update an existing employee for an employer
    @PreAuthorize("hasRole('EMPLOYER')")
    @PutMapping("/employer/{employerId}/employees/{employeeId}")
    public ResponseEntity<User> updateEmployee(@PathVariable Long employerId, @PathVariable Long employeeId, @RequestBody User updatedEmployee) {
        User savedEmployee = userService.updateEmployeeForEmployer(employerId, employeeId, updatedEmployee);
        return ResponseEntity.ok(savedEmployee);
    }

    // Delete an employee by ID for an employer
    @PreAuthorize("hasRole('EMPLOYER')")
    @DeleteMapping("/employer/{employerId}/employees/{employeeId}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long employerId, @PathVariable Long employeeId) {
        userService.deleteEmployeeForEmployer(employerId, employeeId);
        return ResponseEntity.noContent().build();
    }
}
