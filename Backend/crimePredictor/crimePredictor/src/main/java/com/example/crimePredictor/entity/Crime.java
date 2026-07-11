package com.example.crimePredictor.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "crime")
@Data
public class Crime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String crimeType;

    private Double latitude;

    private Double longitude;

    private String district;

    private String crimeDate;

    private String crimeTime;
}