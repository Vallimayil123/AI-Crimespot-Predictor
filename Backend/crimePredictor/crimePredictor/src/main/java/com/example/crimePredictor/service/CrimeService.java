package com.example.crimepredictor.service;

import com.example.crimePredictor.entity.Crime;
import com.example.crimePredictor.repository.CrimeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CrimeService {

    private final CrimeRepository repository;

    public CrimeService(CrimeRepository repository) {
        this.repository = repository;
    }

    public Crime saveCrime(Crime crime) {
        return repository.save(crime);
    }

    public List<Crime> getAllCrimes() {
        return repository.findAll();
    }

    public Crime getCrimeById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void deleteCrime(Long id) {
        repository.deleteById(id);
    }
}