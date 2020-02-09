import React from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFtaWx0b25sYmJkaWFzIiwiYSI6ImNrNmR6dGlycTFrejkzbW44eDQ5b3VrNTkifQ.w6HgiMaaSIucjn7bViXzTQ';

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        lng: 5,
        lat: 34,
        zoom: 2
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        });
    };

    render() {
        return (
            <div>
                <div ref={el => this.mapContainer = el} />
            </div>
        )
    }
};

export default Map;