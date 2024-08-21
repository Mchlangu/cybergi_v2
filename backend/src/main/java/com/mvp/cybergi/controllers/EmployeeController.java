package com.mvp.cybergi.controllers;

import com.mvp.cybergi.model.entity.Module;
import com.mvp.cybergi.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // Fetch enrolled modules for an employee
    @PreAuthorize("hasRole('EMPLOYEE')")
    @GetMapping("/{employeeId}/modules")
    public ResponseEntity<List<Module>> getEnrolledModules(@PathVariable Long employeeId) {
        List<Module> modules = employeeService.getEnrolledModules(employeeId);
        return ResponseEntity.ok(modules);
    }
}
