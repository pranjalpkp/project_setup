package com.inkurban.backend.service;

import com.inkurban.backend.dto.LeadResponseDto;
import com.inkurban.backend.model.Lead;
import com.inkurban.backend.repository.LeadRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LeadService {

    private final LeadRepository leadRepository;
    private final EncryptionService encryptionService;

    @Transactional(readOnly = true)
    public List<LeadResponseDto> getAllLeads() {
        return leadRepository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<LeadResponseDto> getLeadsByType(String leadType) {
        return leadRepository.findByLeadTypeOrderByCreatedAtDesc(leadType)
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private LeadResponseDto mapToDto(Lead lead) {
        return LeadResponseDto.builder()
                .id(lead.getId())
                .leadType(lead.getLeadType())
                .name(lead.getName())
                .email(encryptionService.decrypt(lead.getEmail()))
                .websiteUrl(lead.getWebsiteUrl())
                .industry(lead.getIndustry())
                .selectedDate(lead.getSelectedDate())
                .notes(encryptionService.decrypt(lead.getNotes()))
                .status(lead.getStatus())
                .createdAt(lead.getCreatedAt())
                .build();
    }
}
