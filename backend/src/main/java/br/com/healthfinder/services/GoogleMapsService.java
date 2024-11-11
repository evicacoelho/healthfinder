package br.com.healthfinder.services;

import org.springframework.stereotype.Service;

import com.google.maps.GeoApiContext;
import com.google.maps.GeocodingApi;
import com.google.maps.model.GeocodingResult;

@Service
public class GoogleMapsService {

    private final GeoApiContext context;

    // setter
    public GoogleMapsService(GeoApiContext context) {
        this.context = context;
    }

    public GeocodingResult[] geocodeAddress(String address) throws Exception {
        return GeocodingApi.geocode(context, address).await();
    }
}
