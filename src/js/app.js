"use strict";

var viewModel = (function() {
	var x = 0;
	var map;
	var id;
	var venue;
	var venueUrl;
	var fourSquareUrl;
	var marker;
	var markers = ko.observableArray();
	var rightBoxName = ko.observable();
	var rightBoxPhone = ko.observable();
	var rightBoxAddress = ko.observable();
	var rightBoxUrl = ko.observable();
	var rightBoxRating = ko.observable();
	var rightBoxPhotoUrl = ko.observable();
	var rightBoxTips = ko.observable();
	var rightBoxPrice = ko.observable();
	var rightBoxCategory = ko.observable();
	var rightBoxHours = ko.observable();
	var attributionLink = ko.observable();
	var toggleOpen = ko.observable(false);
	// This photo was taken by me
	var photoUrl = ko.observable("./img/Mission-dolores-basilica.jpg");
	var selectedOption = ko.observable();
	// This paragraph was written by me
	var defaultIntro = ko.observable("The Mission District - named for the Mission Dolores founded in 1776 - is San Francisco’s oldest neighborhood." +
		" Home to a vibrant hispanic community, it boasts the largest concentration of murals in the city. Valencia street is the epicentre of " +
		"gentrification, with hot new restaurants, boutiques, and cafe's rubbing shoulders with local favorites that have stood the test of time.");

	// This is the drop-down menu array
	var dropDown = ko.observableArray(["All Types of Places", "Points of Interest", "Historical Places", "Cafe's and Bakeries", "Art Galleries", "Book Stores", "Music and Movies", "Restaurants and Bars"]);

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
			}], {
				name: "Styled Map"
			});

		// Creates the map - google maps API code
		map = new google.maps.Map(document.getElementById("map"), {
			// center: {lat: 37.759865, lng: -122.414798},
			center: {
				lat: 37.7632006,
				lng: -122.424911
			},
			zoom: 14,
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

	// This is the list-view and map marker filter
	var newList = ko.computed(function() {
		if (selectedOption() === "All Types of Places") {
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
	
	// Got the idea for this on stack overflow http://stackoverflow.com/questions/14657779/google-maps-bounce-animation-on-marker-for-a-limited-period
	// Starts map marker animation on-click
	function startAnimation(marker) {
		marker.setAnimation(google.maps.Animation.BOUNCE);
		stopAnimation(marker);
	}

	// Stops map marker animation after 2 seconds
	function stopAnimation(marker) {
		setTimeout(function() {
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
			if (markers()[i].type === selectedOption()) {
				markers()[i].setMap(map);
			}
		}
	}

	// Removes the markers from the map, but keeps them in the array.
	function clearMarkers() {
		setMapOnAll(null);
	}


	// This creates the markers; makeMarkers is called by initMap, pushes markers into an array, creates an infoWindow per marker 
	// and queries foursquare for the venue ID of each marker location
	function makeMarkers(i) {
		var lat = locations[i].location.lat;
		var lng = locations[i].location.lng;
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
		markerEvents(marker);
		fourSquareInit(marker);
	}

	// Functionality for the map markers - on-click data call (foursquare) and marker animations
	function markerEvents(marker) {
		marker.addListener('click', function() {
			startAnimation(marker);
			fourSquareDataLoad(marker);
		});
	}

	// requests data from foursquare for specific venues based on ID retrieved during initial ajax call
	function fourSquareDataLoad(marker) {
		if (marker.venue == undefined) {
			venueUrl = "https://api.foursquare.com/v2/venues/" + marker.id + "?client_id=3GADBQTTZJLISHTNUDHOLMFLZA5X02JZSXVFI1EJPQUJGKO2&" +
				"client_secret=FQR21B2HNHHE4A5VPNLQHFAFKFQTKUHGSAMFSXGMFCQOXJUV&v=20161005&m=foursquare"

			$.getJSON(venueUrl, function(data) {
				marker.venue = data.response.venue;
				dataDisplay(marker);
			});
		} else {
			dataDisplay(marker);
		}
	}

	// Loads data in right box panel when list item is clicked in the list view
	function listViewDisplay(marker) {
		x = 0;
		toggleOpen(false);
		fourSquareDataLoad(marker);
		startAnimation(marker);
	}

	// Data to be requested during ajax call from fourSquareDataLoad
	function dataDisplay(marker) {
		rightBoxName(marker.venue.name);
		rightBoxCategory(marker.venue.categories[0].name);
		rightBoxAddress(marker.venue.location.address);
		rightBoxPhone(marker.venue.contact.formattedPhone);
		rightBoxPrice(marker.venue.price ? marker.venue.price.message : "");
		rightBoxHours(marker.venue.hours ? marker.venue.hours.status : "");
		rightBoxUrl(marker.venue.url);
		rightBoxRating(marker.venue.rating);
		rightBoxTips(marker.venue.tips.groups[0].items[0].text);
		photoUrl(marker.venue.photos.groups[0].items[1].prefix + "width500" + marker.venue.photos.groups[0].items[1].suffix);
		defaultIntro("");
		attributionLink("https://foursquare.com/v/" + marker.id + "?ref=3GADBQTTZJLISHTNUDHOLMFLZA5X02JZSXVFI1EJPQUJGKO2");
	}

	// Calls foursquare for each marker created with initMap
	function fourSquareInit(marker) {
		fourSquareUrl = "https://api.foursquare.com/v2/venues/search?client_id=3GADBQTTZJLISHTNUDHOLMFLZA5X02JZSXVFI1EJPQUJGKO2&" +
			"client_secret=FQR21B2HNHHE4A5VPNLQHFAFKFQTKUHGSAMFSXGMFCQOXJUV&ll=37.761024,-122.421779" +
			"&query=" + marker.title + "&v=20161005&m=foursquare"

		$.getJSON(fourSquareUrl, function(data) {
			for (var i = 0; i < markers().length; i++) {
				if (marker.title === markers()[i].title) {
					markers()[i].id = data.response.venues[0].id;
				}
			}
		});
	}

	// Checks for errors with ajax calls
	$(document).ajaxError(function(event, jqxhr, thrownError) {
		alert("Sorry, there was a problem. Please try again later.");
		console.log("Error: " + errorThrown);
	});

	// Opens & closes mobile menu
	function toggle() {
		++x;
		if (x % 2) {
			toggleOpen(true);
		} else {
			toggleOpen(false);
		}
	}

	return {
		dropDown: dropDown,
		selectedOption: selectedOption,
		makeMarkers: makeMarkers,
		markers: markers,
		fourSquareDataLoad: fourSquareDataLoad,
		marker: marker,
		newList: newList,
		rightBoxName: rightBoxName,
		rightBoxPhone: rightBoxPhone,
		rightBoxAddress: rightBoxAddress,
		rightBoxUrl: rightBoxUrl,
		rightBoxPhotoUrl: rightBoxPhotoUrl,
		rightBoxTips: rightBoxTips,
		rightBoxPrice: rightBoxPrice,
		rightBoxCategory: rightBoxCategory,
		rightBoxHours: rightBoxHours,
		rightBoxRating: rightBoxRating,
		photoUrl: photoUrl,
		defaultIntro: defaultIntro,
		initMap: initMap,
		dataDisplay: dataDisplay,
		listViewDisplay: listViewDisplay,
		attributionLink: attributionLink,
		toggle: toggle,
		toggleOpen: toggleOpen
	};
})();


ko.applyBindings(viewModel);