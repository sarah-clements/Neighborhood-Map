
var viewModel = (function () {
	var marker;
	var markers = ko.observableArray();
	var newMarkers = ko.observableArray();

	// This is the drop-down menu array
	var dropDown = ko.observableArray(["All Types of Places", "Points of Interest", "Historical Places", "Cafe's and Bakeries", "Art Galleries", "Book Stores", "Music and Movies", "Restaurants and Bars"]); 
	var selectedOption = ko.observable();

	// This is the list-view and map marker filter
	var newList = ko.computed(function() {		
		if(selectedOption() === "All Types of Places") {
			setMapOnAll(map);
			return markers();
		} else {
			clearMarkers();
			setMapOnSome(map);
			return ko.utils.arrayFilter(markers(), function(i) {
                return i.type === selectedOption();
            	});
			}
	    });	

	 // This creates the markers; makeMarkers is called by initMap and pushed into an array 
	function makeMarkers(i) {
		var position = locations[i].location;
        var title = locations[i].title;
        var type = locations[i].type;
			marker = new google.maps.Marker({
            position: position,
            title: title,
            type: type,
            map: map,
            animation: google.maps.Animation.DROP
        });  
	        markers.push(marker); 
	        infoWindow(marker, marker.title);
      }

    // Functionality for the map markers - on-click infowindows and marker animations
	function infoWindow(marker) {
	    var infowindow = new google.maps.InfoWindow({
	    content: marker.title});
	    
	    marker.addListener('click', function() {
	        infowindow.open(marker.get("map"), marker);
	        startAnimation(marker);
	    });      
	}

	// Starts map marker animation on-click
	function startAnimation(marker) {
	        marker.setAnimation(google.maps.Animation.BOUNCE);
	        stopAnimation(marker);
	}

	// Stops map marker animation after 2 seconds
	function stopAnimation(marker) {
	    setTimeout(function () {
	        marker.setAnimation(null);
	    }, 2000);
	}

	// Sets the map on all markers in the array
	function setMapOnAll(map) {
        for (var i = 0; i < markers().length; i++) {
          markers()[i].setMap(map);
        }
      }

    // Sets the map only on markers that match the selectedOption
    function setMapOnSome(map) {
        for (var i = 0; i < markers().length; i++) {
        	if(markers()[i].type === selectedOption()){
        	markers()[i].setMap(map);
	        	}
        	}
        }

      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }

	// function generateList() {
 // 		ko.utils.arrayPushAll(newMarkers, markers());
 // 	}
	// function filterList() {	
	// 	newMarkers.removeAll();
	// 	if(selectedOption() === "All Types of Places") {
	// 		ko.utils.arrayPushAll(newMarkers, markers());
	// 	} else {
	// 		for(i = 0; i < markers.length; i++) {
	// 			if(selectedOption() === markers()[i].type) {
	// 				newMarkers.push(marker);
	// 			} 
	// 		}
	// 	}
	// }
	
	return {
		dropDown: dropDown,
		selectedOption: selectedOption,
		newMarkers: newMarkers,
		newList: newList,
		makeMarkers: makeMarkers,
		markers: markers
	};
})();


ko.applyBindings(viewModel);


					    