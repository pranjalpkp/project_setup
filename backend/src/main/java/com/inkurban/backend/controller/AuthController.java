package com.inkurban.backend.controller;

import com.inkurban.backend.dto.AuthRequestDto;
import com.inkurban.backend.dto.AuthResponseDto;
import com.inkurban.backend.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login(@Valid @RequestBody AuthRequestDto dto) {
        AuthResponseDto response = authService.login(dto);
        return ResponseEntity.ok(response);
    }
}
