var map;



var locations = [{
        "title": "Dandelion Chocolate",
        "type": "Cafe's and Bakeries",
        "location": {
            "lat": 37.761024, "lng": -122.421779}
    }, {
        "title": "Paxton Gate",
        "type": "Points of Interest",
        "location": {
            "lat": 37.759618, "lng": -122.421696}
    }, {
        "title": "Dog Eared Books",
        "type": "Book Stores",
        "location": {
            "lat": 37.758404, "lng": -122.4215 }
    }, {
        "title": "The Women's Building",
        "type": "Points of Interest",
        "location": {
            "lat": 37.76156, "lng": -122.422654}
    }, {
        "title": "Mission Dolores Park",
        "type": "Points of Interest",
        "location": {
            "lat": 37.759773, "lng": -122.427063}
    }, {
        "title": "Four Barrel Coffee",
        "type": "Cafe's and Bakeries",
        "location": {
            "lat": 37.767006, "lng": -122.421885}
     }, {
        "title": "The Chapel",
        "type": "Music and Movies",
        "location": {
            "lat": 37.760512, "lng": -122.421247}
     }, {
        "title": "Roxie Theater",
        "type": "Music and Movies",
        "location": {
            "lat": 37.764777, "lng": -122.422403}
    }, {
        "title": "Clarion Alley Street Art",
        "type": "Points of Interest",
        "location": {
            "lat": 37.762937, "lng": -122.421526}
    }, {
        "title": "City Art Cooperative Gallery",
        "type": "Art Galleries",
        "location": {
            "lat": 37.759477, "lng": -122.421737 }
    }, {
        "title": "Misión San Francisco de Asís",
        "type": "Historical Places",
        "location": {
            "lat": 37.764387, "lng": -122.426897 }
    }, {
        "title": "The Monk's Kettle",
        "type": "Restaurants and Bars",
        "location": {
            "lat": 37.764728, "lng": -122.422999 }
    }, {
        "title": "San Francisco Armory",
        "type": ["Points of Interest", "Historical Places"],
        "location": {
            "lat": 37.767817, "lng": -122.420575 }
    }, {
        "title": "Ritual Coffee Roasters",
        "type": "Cafe's and Bakeries",
        "location": {
            "lat": 37.756442, "lng": -122.421322 }
    }, {
        "title": "Borderlands Books",
        "type": "Book Stores",
        "location": {
            "lat": 37.759045, "lng": -122.421538 }
    }];

// Map style is "Blue Essence" by sairam at https://snazzymaps.com/style/11517/blue-essence
var initMap = function() {
    var styledMapType = new google.maps.StyledMapType(
        [{
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#DBD4CE"
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "hue": "#1900ff"
        }, {
            "color": "#c0e8e8"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "lightness": 100
        }, {
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "on"
        }, {
            "lightness": 700
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#7dcdcd"
        }]
    }],
    {name: "Styled Map"});

    map = new google.maps.Map(document.getElementById("map"), {
        // center: {lat: 37.759865, lng: -122.414798},
        center: {lat: 37.759452, lng: -122.42149},
        zoom: 15,
        mapTypeControlOptions: {
            mapTypeId: "styled_map"
        }
    });

    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId("styled_map");
    
    for (var i = 0; i < locations.length; i++) {     
        viewModel.makeMarkers(i);
    }  
}


