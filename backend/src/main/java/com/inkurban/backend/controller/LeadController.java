package com.inkurban.backend.controller;

import com.inkurban.backend.dto.LeadResponseDto;
import com.inkurban.backend.service.LeadService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/growth/leads")
@RequiredArgsConstructor
public class LeadController {

    private final LeadService leadService;

    @GetMapping
    public ResponseEntity<List<LeadResponseDto>> getLeads(@RequestParam(required = false) String type) {
        if (type != null && !type.isBlank()) {
            return ResponseEntity.ok(leadService.getLeadsByType(type));
        }
        return ResponseEntity.ok(leadService.getAllLeads());
    }
}
