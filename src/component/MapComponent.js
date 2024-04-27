import React, { useEffect } from 'react';
import Logout from './logout';

import './CSS/MapComponent.css'
const MapComponent = ({ lat, long }) => {
  useEffect(() => {
    const initMap = () => {
      const pyrmont = new window.google.maps.LatLng(lat, long);
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 12
      });

      const request = {
        location: pyrmont,
        radius: '5000',
        type: ['hospital']
      };

      const service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);

      function callback(results, status) {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            createMarker(results[i], map);
          }
        }
      }

      function createMarker(place, map) {
        const marker = new window.google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        window.google.maps.event.addListener(marker, 'click', function () {
          const infowindow = new window.google.maps.InfoWindow();
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
    };

    if (window.google) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBXAeO1bvYrd7A8l6XWeNbtDPeTcyYxRuI&libraries=places`;
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, [lat, long]);

  return (
    <>

      <div id='logOut' className='logOut'>
        <div className='heading'>
          <h3>Near By Hospital</h3></div>
        <div>
          <Logout /></div>
      </div>

      <div id="map" className='map'></div>
    </>
  );
};

export default MapComponent;
