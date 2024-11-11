package br.com.healthfinder.controllers;

import com.google.maps.model.GeocodingResult;

import br.com.healthfinder.services.GoogleMapsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GoogleMapsController {

    private final GoogleMapsService googleMapsService;

    //setter
    public GoogleMapsController(GoogleMapsService googleMapsService) {
        this.googleMapsService = googleMapsService;
    }

    @GetMapping("/geocode")
    public GeocodingResult[] geocodeAddress(@RequestParam String address) throws Exception {
        return googleMapsService.geocodeAddress(address);
    }
    

}
