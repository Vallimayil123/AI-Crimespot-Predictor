package com.example.crimePredictor.controller;

import com.example.crimePredictor.entity.Crime;
import com.example.crimepredictor.service.CrimeService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

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

    // AI Prediction
    @PostMapping("/../predict")
    public Map<String, Object> predictCrime(
            @RequestBody Map<String, Object> request) {

        RestTemplate restTemplate = new RestTemplate();

        String flaskUrl = "http://127.0.0.1:5000/predict";

        return restTemplate.postForObject(
                flaskUrl,
                request,
                Map.class
        );
    }
}