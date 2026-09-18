package com.example.crimePredictor.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PredictionController {

    @PostMapping("/predict")
    public Map<String, Object> predictCrime(
            @RequestBody Map<String, Object> request) {

        RestTemplate restTemplate = new RestTemplate();

        String flaskUrl = System.getenv().getOrDefault(
                "AI_SERVICE_URL",
                "http://127.0.0.1:5000"
        );

        return restTemplate.postForObject(
                flaskUrl + "/predict",
                request,
                Map.class
        );
    }
}
