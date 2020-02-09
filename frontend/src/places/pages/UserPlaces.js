import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title:'Empire State',
        description:'nice building',
        imageUrl:'https://1.bp.blogspot.com/-I2oC505fwRM/Tb3yE6J72XI/AAAAAAAAA5k/_E75zYkmpk0/s1600/450px-Empire_State_Building_from_the_Top_of_the_Rock.jpg',
        address:'20 W 34th St, New York, NY 10001, Estados Unidos',
        location:{
            lat: 40.74,
            lon: -73.98
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title:'Empire State',
        description:'nice building',
        imageUrl:'https://1.bp.blogspot.com/-I2oC505fwRM/Tb3yE6J72XI/AAAAAAAAA5k/_E75zYkmpk0/s1600/450px-Empire_State_Building_from_the_Top_of_the_Rock.jpg',
        address:'20 W 34th St, New York, NY 10001, Estados Unidos',
        location:{
            lat: 40.74,
            lon: -73.98
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return (
        <PlaceList items={loadedPlaces} />
    );
};

export default UserPlaces;