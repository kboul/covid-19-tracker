import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

import { useStore } from "../../hooks";
import { initialSelectedCountry } from "../../constants";
import { initialZoom, position } from "./constants";

export default function ZoomToCountry() {
  const indCountryInfo = useStore(state => state.indCountryInfo);
  const selectedCountry = useStore(state => state.selectedCountry);
  const isInitialSelectedCountry = selectedCountry === initialSelectedCountry;

  const map = useMap();
  useEffect(() => {
    if (!map) return;

    const coordinates = isInitialSelectedCountry
      ? new L.LatLng(position.lat, position.lng)
      : new L.LatLng(
          indCountryInfo.countryInfo?.lat,
          indCountryInfo.countryInfo?.long
        );
    const zoom = isInitialSelectedCountry ? initialZoom : 4;

    map.setView(coordinates, zoom);
  }, [map, indCountryInfo]);

  return null;
}
