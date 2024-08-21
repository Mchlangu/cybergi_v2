package com.mvp.cybergi.controllers;

import com.mvp.cybergi.Payload.response.ModuleDetailsResponse;
import com.mvp.cybergi.model.entity.Module;
import com.mvp.cybergi.services.ModuleService;
import com.mvp.cybergi.services.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/modules")
public class ModuleController {

    @Autowired
    private ModuleService moduleService;

    @Autowired
    private SubscriptionService subscriptionService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<Module> createModule(@RequestBody Module module) {
        return ResponseEntity.ok(moduleService.createModule(module));
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'EMPLOYER')")
    @GetMapping("/all")
    public ResponseEntity<List<Module>> getAllModules() {
        return ResponseEntity.ok(moduleService.getAllModules());
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'EMPLOYER')")
    @GetMapping("/featured")
    public ResponseEntity<List<Module>> getFeaturedModules() {
        return ResponseEntity.ok(moduleService.getFeaturedModules());
    }

    @PreAuthorize("hasRole('EMPLOYER')")
    @GetMapping("/{id}/details")
    public ResponseEntity<ModuleDetailsResponse> getModuleDetailsForEmployer(@PathVariable Long id, @RequestParam Long employerId) {
        boolean isSubscribed = subscriptionService.isSubscribed(employerId, id);

        Optional<Module> module = moduleService.getModuleById(id);
        return module.map(mod -> {
            ModuleDetailsResponse response = new ModuleDetailsResponse();
            response.setId(mod.getId());
            response.setTitle(mod.getTitle());
            response.setDescription(mod.getDescription());
            response.setFeatured(mod.isFeatured());
            response.setSubscribed(isSubscribed);  // Indicate whether the employer is already subscribed
            return ResponseEntity.ok(response);
        }).orElse(ResponseEntity.notFound().build());
    }


    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<Module> updateModule(@PathVariable Long id, @RequestBody Module updatedModule) {
        return ResponseEntity.ok(moduleService.updateModule(id, updatedModule));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteModule(@PathVariable Long id) {
        moduleService.deleteModule(id);
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/all")
    public ResponseEntity<Void> deleteAllModules() {
        moduleService.deleteAllModules();
        return ResponseEntity.noContent().build();
    }
}
