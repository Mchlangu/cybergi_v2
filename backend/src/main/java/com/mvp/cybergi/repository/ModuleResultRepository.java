package com.mvp.cybergi.repository;

import com.mvp.cybergi.model.entity.ModuleResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModuleResultRepository extends JpaRepository<ModuleResult, Long> {
}
