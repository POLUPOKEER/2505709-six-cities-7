import { useEffect, useRef } from 'react';
import leaflet, { Map as LeafletMap, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { TOffers } from '../types/offers';

type MapProps = {
  offersData: TOffers;
  activeOfferId: string;
};

const defaultIcon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const activeIcon = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map({
  offersData,
  activeOfferId,
}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);

  const mapInstanceRef = useRef<LeafletMap | null>(null);

  const markersRef = useRef<Marker[]>([]);

  useEffect(() => {
    if (mapRef.current === null || offersData.length === 0) {
      return;
    }

    const city = offersData[0].city;

    if (mapInstanceRef.current === null) {
      mapInstanceRef.current = leaflet.map(mapRef.current, {
        center: [
          city.location.latitude,
          city.location.longitude,
        ],
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=cb1_4mcu_1_386491d060a42dc62e56b5ff',
          {
            attribution:
              '&copy; OpenStreetMap contributors &copy; CARTO',
            maxZoom: 20,
          }
        )
        .addTo(mapInstanceRef.current);
    } else {
      mapInstanceRef.current.setView(
        [
          city.location.latitude,
          city.location.longitude,
        ],
        city.location.zoom
      );
    }
  }, [offersData]);

  useEffect(() => {
    if (mapInstanceRef.current === null) {
      return;
    }

    markersRef.current.forEach((marker) => {
      marker.remove();
    });

    markersRef.current = offersData.map((offer) => {
      const marker = leaflet.marker(
        [
          offer.location.latitude,
          offer.location.longitude,
        ],
        {
          icon:
            offer.id === activeOfferId
              ? activeIcon
              : defaultIcon,
        }
      );

      marker.addTo(mapInstanceRef.current!);

      return marker;
    });
  }, [offersData, activeOfferId]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    />
  );
}

export default Map;
