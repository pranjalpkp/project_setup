package com.inkurban.backend.controller;

import com.inkurban.backend.dto.AuditRequestDto;
import com.inkurban.backend.model.AuditRequest;
import com.inkurban.backend.service.AuditService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/growth/audits")
@RequiredArgsConstructor
public class AuditController {

    private final AuditService auditService;

    @PostMapping
    public ResponseEntity<AuditRequest> createAuditRequest(@Valid @RequestBody AuditRequestDto dto) {
        AuditRequest createdAudit = auditService.createAuditRequest(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAudit);
    }
}
