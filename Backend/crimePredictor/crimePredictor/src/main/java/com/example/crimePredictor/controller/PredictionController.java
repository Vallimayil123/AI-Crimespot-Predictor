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

        String flaskUrl = "http://127.0.0.1:5000/predict";

        return restTemplate.postForObject(
                flaskUrl,
                request,
                Map.class
        );
    }
}
