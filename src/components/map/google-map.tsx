
import { Card } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/components/ui/use-toast';

// Adding proper type declarations for Google Maps
declare global {
  interface Window {
    google: typeof google;
  }
}

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
  const [mapScriptLoaded, setMapScriptLoaded] = useState(false);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  
  // Function to initialize the map once the script is loaded
  const initializeMap = () => {
    if (!mapRef.current || !window.google || !window.google.maps) return;
    
    try {
      // Create the map
      const mapInstance = new window.google.maps.Map(mapRef.current, {
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
      
      mapInstanceRef.current = mapInstance;

      // Add marker with custom icon
      const marker = new window.google.maps.Marker({
        position: location,
        map: mapInstance,
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
          map: mapInstance,
        });
      });
      
      // Add controls
      mapInstance.setOptions({
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true
      });
      
      setIsLoading(false);
      setMapError(null);
    } catch (error) {
      console.error("Error initializing map:", error);
      setMapError("Failed to initialize map");
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Map Error",
        description: "Failed to initialize Google Maps. Please try again later."
      });
    }
  };
  
  useEffect(() => {
    // Function to load the Google Maps script
    const loadGoogleMapsScript = () => {
      // Using a placeholder API key - in production, this would be an environment variable
      const googleMapsApiKey = 'AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg';
      
      // Don't load script if it's already loaded
      if (window.google && window.google.maps) {
        setMapScriptLoaded(true);
        return;
      }
      
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`;
      script.async = true;
      script.defer = true;
      
      // Add event listeners for script loading
      script.onload = () => {
        console.log("Google Maps script loaded successfully");
        setMapScriptLoaded(true);
      };
      
      script.onerror = () => {
        console.error("Failed to load Google Maps script");
        setMapError("Failed to load Google Maps");
        setIsLoading(false);
        toast({
          variant: "destructive", 
          title: "Map Error",
          description: "Failed to load Google Maps. Please check your internet connection."
        });
      };
      
      document.head.appendChild(script);
    };
    
    // Check if Google Maps API is already loaded
    if (window.google && window.google.maps) {
      setMapScriptLoaded(true);
    } else {
      loadGoogleMapsScript();
    }
    
    return () => {
      // Clean up map instance if exists
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, []);
  
  // Initialize map when script is loaded and component is mounted
  useEffect(() => {
    if (mapScriptLoaded && mapRef.current) {
      // Small timeout to ensure Google Maps API is fully initialized
      const timer = setTimeout(() => {
        initializeMap();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [mapScriptLoaded, location, zoom]);
  
  return (
    <Card className={`w-full overflow-hidden rounded-2xl shadow-xl transition-all hover:shadow-2xl ${className} dark:bg-sidebar-background`} style={{ height }}>
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
