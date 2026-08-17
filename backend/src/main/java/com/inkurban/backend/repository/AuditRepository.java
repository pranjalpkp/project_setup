package com.inkurban.backend.repository;

import com.inkurban.backend.model.AuditRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuditRepository extends JpaRepository<AuditRequest, Long> {
}
