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
        "title": "San Francisco Women's Building",
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
        "title": "Roxie Cinema",
        "type": "Music and Movies",
        "location": {
            "lat": 37.764777, "lng": -122.422403}
    }, {
        "title": "Clarion Alley",
        "type": "Points of Interest",
        "location": {
            "lat": 37.762937, "lng": -122.421526}
    }, {
        "title": "City Art Gallery",
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






// function yelpData(marker){
//     var yelpToken = {
//     "access_token": "lLqS-qSYC0ETCoHLN25zCUjBx_REQSJCM44zOWaA3JX_NEv640y0f6lMaiVW1_oJWJ2PXipea8MNAaDBh6bJS-3wsQrS8r7vEyo4uaOPUKRTmzz_YzknVFJ_shL0V3Yx",
//     "expires_in": 15551999,
//     "token_type": "Bearer"
//     };
//     // $.ajaxSetup({
//     // headers: {"Authorization": "Bearer lLqS-qSYC0ETCoHLN25zCUjBx_REQSJCM44zOWaA3JX_NEv640y0f6lMaiVW1_oJWJ2PXipea8MNAaDBh6bJS-3wsQrS8r7vEyo4uaOPUKRTmzz_YzknVFJ_shL0V3Yx"}
//     // });
//     $.ajax({    
//         url: "https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco",
//         method: "GET",
//         dataType: "jsonp",
//         cache: true,
//         // url: "https://api.yelp.com/v3/businesses/search?term=" + marker.title + "San Francisco"
//         // method: "GET",
//         beforeSend: function(xhr, settings){xhr.setRequestHeader('Authorization', 'Bearer ' + yelpToken.access_token);},
//         complete: function(response){ console.log(response) }
//     })
//     .done(function( json ) {
//     console.log(json);
//      })
//     .fail(function( xhr, status, errorThrown ) {
//     alert( "Sorry, there was a problem. Please try again later." );
//     console.log( "Error: " + errorThrown );
//     });
// }
 

  


  // function flickrGallery(){
    
//     $.ajax({
//         url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=eb73c503448a28ad12d57f6203268c5a&tags=san+francisco%2C+mission&license=1%2C2%2C3%2C4%2C5%2C6%2C7&per_page=50&page=1&format=json&nojsoncallback=1"
//     })
//     .done(function( json ) {
//     console.log("Successful data load!");
//      })
//     .fail(function( xhr, status, errorThrown ) {
//     alert( "Sorry, there was a problem. Please try again later." );
//     console.log( "Error: " + errorThrown );
//     });
// }
