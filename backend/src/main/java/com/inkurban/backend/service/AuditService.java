package com.inkurban.backend.service;

import com.inkurban.backend.dto.AuditRequestDto;
import com.inkurban.backend.model.AuditRequest;
import com.inkurban.backend.model.Lead;
import com.inkurban.backend.repository.AuditRepository;
import com.inkurban.backend.repository.LeadRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuditService {

    private final AuditRepository auditRepository;
    private final LeadRepository leadRepository;
    private final EncryptionService encryptionService;

    @Transactional
    public AuditRequest createAuditRequest(AuditRequestDto dto) {
        // Save Audit Request Record
        AuditRequest auditRequest = AuditRequest.builder()
                .name(dto.getName())
                .email(dto.getEmail())
                .websiteUrl(dto.getWebsiteUrl())
                .industry(dto.getIndustry())
                .build();
        AuditRequest savedAudit = auditRepository.save(auditRequest);

        // Register Lead Entry for Lead Management (Encrypted Email for DB protection)
        Lead lead = Lead.builder()
                .leadType("AUDIT_REQUEST")
                .name(dto.getName())
                .email(encryptionService.encrypt(dto.getEmail()))
                .websiteUrl(dto.getWebsiteUrl())
                .industry(dto.getIndustry())
                .status("NEW")
                .build();
        leadRepository.save(lead);

        return savedAudit;
    }
}
