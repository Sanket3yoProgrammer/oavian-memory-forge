
import { Card } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface GoogleMapProps {
  className?: string;
  location?: { lat: number; lng: number };
  zoom?: number;
  height?: string;
}

export function GoogleMap({ 
  className = "", 
  location = { lat: 20.9517, lng: 85.0985 }, // Odisha, India
  zoom = 8,
  height = "400px"
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);
  
  useEffect(() => {
    // Load the Google Maps script dynamically
    const loadGoogleMapsScript = () => {
      // Using a placeholder API key - in production, this would be an environment variable
      const googleMapsApiKey = 'AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg';
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      // Add error handler for script loading
      script.onerror = () => {
        setMapError("Failed to load Google Maps");
        setIsLoading(false);
      };
      
      window.initMap = () => {
        if (!mapRef.current) return;
        
        try {
          // Create the map
          const map = new window.google.maps.Map(mapRef.current, {
            center: location,
            zoom: zoom,
            mapTypeId: 'roadmap',
            styles: [
              {
                "elementType": "geometry",
                "stylers": [{ "color": "#f5f5f5" }]
              },
              {
                "elementType": "labels.icon",
                "stylers": [{ "visibility": "off" }]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#616161" }]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#f5f5f5" }]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#bdbdbd" }]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{ "color": "#eeeeee" }]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#757575" }]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{ "color": "#e5e5e5" }]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#9e9e9e" }]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{ "color": "#ffffff" }]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#757575" }]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{ "color": "#dadada" }]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#616161" }]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#9e9e9e" }]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{ "color": "#e5e5e5" }]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{ "color": "#eeeeee" }]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#c9c9c9" }]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#9e9e9e" }]
              }
            ],
          });

          // Add marker with custom icon
          const marker = new window.google.maps.Marker({
            position: location,
            map: map,
            title: "Odisha Adarsha Vidyalaya",
            animation: window.google.maps.Animation.DROP,
          });
          
          // Add info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 8px; max-width: 200px;">
                <h3 style="margin: 0 0 8px; font-weight: bold;">Odisha Adarsha Vidyalaya</h3>
                <p style="margin: 0;">A premier educational institution in Odisha, India</p>
              </div>
            `
          });
          
          marker.addListener("click", () => {
            infoWindow.open({
              anchor: marker,
              map,
            });
          });
          
          // Add controls
          map.setOptions({
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            rotateControl: true,
            fullscreenControl: true
          });
          
          setIsLoading(false);
        } catch (error) {
          console.error("Error initializing map:", error);
          setMapError("Failed to initialize map");
          setIsLoading(false);
        }
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
    <Card className={`w-full overflow-hidden rounded-2xl shadow-xl transition-all hover:shadow-2xl ${className}`} style={{ height }}>
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center bg-muted/20">
          <div className="space-y-4 w-full px-8">
            <Skeleton className="h-8 w-3/4 mx-auto" />
            <Skeleton className="h-32 w-full" />
            <div className="grid grid-cols-3 gap-2">
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
            </div>
          </div>
        </div>
      )}
      
      {mapError && (
        <div className="w-full h-full flex items-center justify-center bg-muted/20 p-4">
          <div className="text-center text-muted-foreground">
            <p>Unable to load map. Please try again later.</p>
            <p className="text-sm mt-2">{mapError}</p>
          </div>
        </div>
      )}
      
      <div 
        ref={mapRef} 
        className="w-full h-full transition-opacity duration-300"
        style={{ opacity: isLoading || mapError ? 0 : 1 }}
      />
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
