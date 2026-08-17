package com.inkurban.backend.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LeadResponseDto {
    private Long id;
    private String leadType;
    private String name;
    private String email;
    private String websiteUrl;
    private String industry;
    private String selectedDate;
    private String notes;
    private String status;
    private LocalDateTime createdAt;
}
