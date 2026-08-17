package com.inkurban.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookingRequestDto {

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Valid email is required")
    private String email;

    @NotBlank(message = "Website URL is required")
    private String websiteUrl;

    @NotBlank(message = "Selected date/time slot is required")
    private String selectedDate;

    private String notes;
}
