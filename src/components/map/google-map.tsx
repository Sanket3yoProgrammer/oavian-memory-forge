
import { Card } from '@/components/ui/card';
import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  className?: string;
  location?: { lat: number; lng: number };
  zoom?: number;
}

export function GoogleMap({ 
  className = "", 
  location = { lat: 20.9517, lng: 85.0985 }, // Odisha, India
  zoom = 7 
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Load the Google Maps script dynamically
    const loadGoogleMapsScript = () => {
      const googleMapsApiKey = 'AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg'; // This is a placeholder key
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      window.initMap = () => {
        if (!mapRef.current) return;
        
        // Create the map
        const map = new window.google.maps.Map(mapRef.current, {
          center: location,
          zoom: zoom,
          mapTypeId: 'hybrid',
          styles: [
            { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels.text.fill",
              stylers: [{ color: "#bdbdbd" }],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ color: "#eeeeee" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#757575" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#e5e5e5" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9e9e9e" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#c9c9c9" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9e9e9e" }],
            },
          ],
        });

        // Add marker
        new window.google.maps.Marker({
          position: location,
          map: map,
          title: "Odisha Adarsha Vidyalaya",
          animation: window.google.maps.Animation.DROP,
        });
      };
      
      document.head.appendChild(script);
    };
    
    // Check if Google Maps API is already loaded
    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      window.initMap();
    }
    
    return () => {
      // Clean up by removing the initMap global
      window.initMap = undefined;
    };
  }, [location, zoom]);
  
  return (
    <Card className={`w-full h-[400px] overflow-hidden rounded-2xl shadow-xl transition-all hover:shadow-2xl ${className}`}>
      <div ref={mapRef} className="w-full h-full" />
    </Card>
  );
}

// Add Google Maps types
declare global {
  interface Window {
    google: any;
    initMap: (() => void) | undefined;
  }
}
