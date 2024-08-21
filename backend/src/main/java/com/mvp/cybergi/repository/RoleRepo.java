package com.mvp.cybergi.repository;

import com.mvp.cybergi.model.enums.ERole;
import com.mvp.cybergi.model.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepo extends JpaRepository<Role, Long> {
    Optional<Role> findByName (ERole name);

}
