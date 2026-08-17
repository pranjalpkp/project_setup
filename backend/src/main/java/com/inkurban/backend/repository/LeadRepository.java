package com.inkurban.backend.repository;

import com.inkurban.backend.model.Lead;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeadRepository extends JpaRepository<Lead, Long> {
    List<Lead> findByLeadTypeOrderByCreatedAtDesc(String leadType);
    List<Lead> findAllByOrderByCreatedAtDesc();
}
