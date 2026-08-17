package com.inkurban.backend.security;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if ("admin@inkurban.in".equalsIgnoreCase(username) || "admin".equalsIgnoreCase(username)) {
            return new User(
                    "admin@inkurban.in",
                    "$2a$10$e8w4Gv7YI9L2H8u2G9Z5.uGqN7A5W6k3L9A3M8B2C4D6E8F1G2H3I", // Encrypted BCrypt placeholder
                    Collections.singletonList(new SimpleGrantedAuthority("ROLE_ADMIN"))
            );
        }
        throw new UsernameNotFoundException("User not found with username: " + username);
    }
}
