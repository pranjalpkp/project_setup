package com.inkurban.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthRequestDto {

    @NotBlank(message = "Username/Email is required")
    private String username;

    @NotBlank(message = "Password is required")
    private String password;
}
