package com.inkurban.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Arrays;
import java.util.Base64;

@Service
public class EncryptionService {

    private static final String ALGORITHM = "AES";

    private final SecretKeySpec secretKeySpec;

    public EncryptionService(@Value("${app.security.encryption.secret-key}") String secretKey) {
        try {
            byte[] key = secretKey.getBytes(StandardCharsets.UTF_8);
            MessageDigest sha = MessageDigest.getInstance("SHA-256");
            key = sha.digest(key);
            key = Arrays.copyOf(key, 32); // 256-bit key length
            this.secretKeySpec = new SecretKeySpec(key, ALGORITHM);
        } catch (Exception e) {
            throw new RuntimeException("Failed to initialize AES-256 Encryption Service", e);
        }
    }

    public String encrypt(String value) {
        if (value == null || value.isEmpty()) return value;
        try {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);
            byte[] encrypted = cipher.doFinal(value.getBytes(StandardCharsets.UTF_8));
            return Base64.getEncoder().encodeToString(encrypted);
        } catch (Exception e) {
            throw new RuntimeException("Error encrypting payload", e);
        }
    }

    public String decrypt(String encryptedValue) {
        if (encryptedValue == null || encryptedValue.isEmpty()) return encryptedValue;
        try {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);
            byte[] original = cipher.doFinal(Base64.getDecoder().decode(encryptedValue));
            return new String(original, StandardCharsets.UTF_8);
        } catch (Exception e) {
            // Return original if not encrypted
            return encryptedValue;
        }
    }
}
