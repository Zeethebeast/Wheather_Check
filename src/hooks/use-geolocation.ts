import type { Coordinates } from "@/api/types";
import { useEffect, useState } from "react";

interface Geolocationstate {
  coordinates: Coordinates | null;
  error: string | null;
  isLoading: boolean;
}

export function useGeolocation() {
  const [locationData, setlocationData] = useState<Geolocationstate>({
    coordinates: null,
    error: null,
    isLoading: true,
  });

  const getLocation = () => {
    setlocationData((prev) => ({ ...prev, isLoading: true, error: null }));

    if (!navigator.geolocation) {
      setlocationData({
        coordinates: null,
        error: "Geolocation iis not supported by your browser",
        isLoading: false,
      });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setlocationData({
          coordinates: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
          error: null,
          isLoading: false,
        });
      },
      (error) => {
        let errorMessage: string;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Location permission denied. Please enable location access";
            break;

          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;

          case error.TIMEOUT:
            errorMessage = "Location request timed out";
            break;
          default:
            errorMessage = " An unknown error occured.";
        }

        setlocationData({
          coordinates: null,
          error: errorMessage,
          isLoading: false,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 6000,
        maximumAge: 0,
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);
  return {
    ...locationData,
    getLocation,
  };
}
