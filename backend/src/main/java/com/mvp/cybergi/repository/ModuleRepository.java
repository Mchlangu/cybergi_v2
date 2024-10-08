package com.mvp.cybergi.repository;

import com.mvp.cybergi.model.entity.Module;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ModuleRepository extends JpaRepository<Module, Long> {
    List<Module> findByFeatured(boolean featured);
}

