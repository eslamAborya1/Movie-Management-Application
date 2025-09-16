package com.fawry.movieappbackend.repository.rate;

import com.fawry.movieappbackend.entity.Rate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RateRepository extends JpaRepository<Rate, Integer> {
    boolean existsByMovie_IdAndUser_Id(Integer userId, Integer MovieId);
}
