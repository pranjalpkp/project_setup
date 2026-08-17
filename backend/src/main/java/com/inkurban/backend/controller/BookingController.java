package com.inkurban.backend.controller;

import com.inkurban.backend.dto.BookingRequestDto;
import com.inkurban.backend.model.BookingRequest;
import com.inkurban.backend.service.BookingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/growth/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    @PostMapping
    public ResponseEntity<BookingRequest> createBookingRequest(@Valid @RequestBody BookingRequestDto dto) {
        BookingRequest createdBooking = bookingService.createBookingRequest(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdBooking);
    }
}
