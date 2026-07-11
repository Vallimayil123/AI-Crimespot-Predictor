package com.example.crimePredictor.repository;

import com.example.crimePredictor.entity.Crime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CrimeRepository extends JpaRepository<Crime, Long> {

}