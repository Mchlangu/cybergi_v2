package com.mvp.cybergi.services;

import com.mvp.cybergi.model.entity.Lesson;
import com.mvp.cybergi.model.entity.Module;
import com.mvp.cybergi.repository.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ModuleService {

    @Autowired
    private ModuleRepository moduleRepository;

    // Create a new module
    public Module createModule(Module module) {
        return moduleRepository.save(module);
    }

    // Retrieve all modules
    public List<Module> getAllModules() {
        return moduleRepository.findAll();
    }

    // Retrieve featured modules
    public List<Module> getFeaturedModules() {
        return moduleRepository.findByFeatured(true); // Return only featured modules
    }

    // Retrieve a module by its ID
    public Optional<Module> getModuleById(Long id) {
        return moduleRepository.findById(id);
    }

    // Update an existing module
    public Module updateModule(Long id, Module updatedModule) {
        return moduleRepository.findById(id)
                .map(module -> {
                    module.setTitle(updatedModule.getTitle());
                    module.setDescription(updatedModule.getDescription());

                    // Clear the existing lessons and add the updated lessons
                    module.getLessons().clear();
                    module.getLessons().addAll(updatedModule.getLessons());

                    // Set the module reference for each lesson to ensure consistency
                    for (Lesson lesson : module.getLessons()) {
                        lesson.setModule(module);
                    }

                    return moduleRepository.save(module);
                }).orElseThrow(() -> new RuntimeException("Module not found"));
    }

    // Delete a module by its ID
    public void deleteModule(Long id) {
        moduleRepository.deleteById(id);
    }

    // Delete all modules
    public void deleteAllModules() {
        moduleRepository.deleteAll();
    }
}
