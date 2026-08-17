package com.inkurban.backend.repository;

import com.inkurban.backend.model.BookingRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<BookingRequest, Long> {
}
