package com.example.crimePredictor.controller;

import com.example.crimePredictor.entity.Crime;
import com.example.crimepredictor.service.CrimeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/crimes")
@CrossOrigin(origins = "*")
public class CrimeController {

    private final CrimeService service;

    public CrimeController(CrimeService service) {
        this.service = service;
    }

    @PostMapping
    public Crime addCrime(@RequestBody Crime crime) {
        return service.saveCrime(crime);
    }

    @GetMapping
    public List<Crime> getAllCrimes() {
        return service.getAllCrimes();
    }

    @GetMapping("/{id}")
    public Crime getCrime(@PathVariable Long id) {
        return service.getCrimeById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteCrime(@PathVariable Long id) {
        service.deleteCrime(id);
        return "Crime deleted successfully";
    }
}