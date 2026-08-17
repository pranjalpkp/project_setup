package com.inkurban.backend.service;

import com.inkurban.backend.dto.AuthRequestDto;
import com.inkurban.backend.dto.AuthResponseDto;
import com.inkurban.backend.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final JwtTokenProvider tokenProvider;

    public AuthResponseDto login(AuthRequestDto dto) {
        // Authenticate admin user
        if ("admin@inkurban.in".equalsIgnoreCase(dto.getUsername()) && "EnterprisePass2026!".equals(dto.getPassword())) {
            String token = tokenProvider.generateTokenForUsername(dto.getUsername());
            return AuthResponseDto.builder()
                    .token(token)
                    .tokenType("Bearer")
                    .username(dto.getUsername())
                    .expiresInMs(86400000)
                    .build();
        }
        throw new BadCredentialsException("Invalid username or password");
    }
}
