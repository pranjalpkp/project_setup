package com.inkurban.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "leads")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Lead {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "lead_type", nullable = false)
    private String leadType; // AUDIT_REQUEST or STRATEGY_BOOKING

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(name = "website_url", nullable = false)
    private String websiteUrl;

    private String industry;

    @Column(name = "selected_date")
    private String selectedDate;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @Column(nullable = false)
    private String status; // NEW, CONTACTED, AUDIT_SENT, CONVERTED

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        if (this.status == null) {
            this.status = "NEW";
        }
    }
}
