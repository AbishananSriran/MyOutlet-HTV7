import React from 'react';
import { Mazemap } from 'mazemap-api/vendor/mazemap';

function Map() {
    function distance_in_steps(lat_1, lon1, lat_2, lon2) 
    {
        var R = 6371; // km
        var dLat = toRad(Math.abs(lat_2-lat_1));
        var dLon = toRad(Math.abs(lon2-lon1));
        var lat1 = toRad(lat_1);
        var lat2 = toRad(lat_2);

        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;
        return d / 0.88;
    }

    // Converts numeric degrees to radians
    function toRad(value) 
    {
        return value * Math.PI / 180;
    }


    var map = new Mazemap.Map({
        // container id specified in the HTML
        container: 'map',

        // initial position in lngLat format
        center: {lng: -79.1874, lat: 43.7840},

        // initial zoom
        zoom: 17
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new Mazemap.mapboxgl.NavigationControl());

    map.on('load', function(){
        // MazeMap ready

        var lngLat = map.getCenter();

        var marker = new Mazemap.MazeMarker( {
            color: "#FF00FF",
            size: 15,
            shape: "circle",
            zLevel: 1
        } ).setLngLat( lngLat ).addTo(map);

    });

    return (
        <div className='mapContainer'>
            <div className="mapSection" ref={map} style={{height: '100%'}}>
                
            </div>
        </div>
    );
}

export default Map;