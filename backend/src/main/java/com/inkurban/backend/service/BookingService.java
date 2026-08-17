package com.inkurban.backend.service;

import com.inkurban.backend.dto.BookingRequestDto;
import com.inkurban.backend.model.BookingRequest;
import com.inkurban.backend.model.Lead;
import com.inkurban.backend.repository.BookingRepository;
import com.inkurban.backend.repository.LeadRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;
    private final LeadRepository leadRepository;
    private final EncryptionService encryptionService;

    @Transactional
    public BookingRequest createBookingRequest(BookingRequestDto dto) {
        // Save Booking Request Record
        BookingRequest bookingRequest = BookingRequest.builder()
                .name(dto.getName())
                .email(dto.getEmail())
                .websiteUrl(dto.getWebsiteUrl())
                .selectedDate(dto.getSelectedDate())
                .notes(dto.getNotes())
                .build();
        BookingRequest savedBooking = bookingRepository.save(bookingRequest);

        // Register Lead Entry for Lead Management (Encrypted Email & Notes for DB protection)
        Lead lead = Lead.builder()
                .leadType("STRATEGY_BOOKING")
                .name(dto.getName())
                .email(encryptionService.encrypt(dto.getEmail()))
                .websiteUrl(dto.getWebsiteUrl())
                .selectedDate(dto.getSelectedDate())
                .notes(encryptionService.encrypt(dto.getNotes()))
                .status("NEW")
                .build();
        leadRepository.save(lead);

        return savedBooking;
    }
}
