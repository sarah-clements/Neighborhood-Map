function initMap(){var a=new google.maps.StyledMapType([{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#DBD4CE"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{hue:"#1900ff"},{color:"#c0e8e8"}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{visibility:"on"},{lightness:700}]},{featureType:"water",elementType:"all",stylers:[{color:"#7dcdcd"}]}],{name:"Styled Map"}),b=new google.maps.Map(document.getElementById("map"),{center:{lat:37.7632006,lng:-122.424911},zoom:14,mapTypeControlOptions:{mapTypeId:"styled_map"}});b.mapTypes.set("styled_map",a),b.setMapTypeId("styled_map"),viewModel.init(locations,b),ko.applyBindings(viewModel)}var viewModel=function(){"use strict";function a(){alert("Sorry, there was a problem loading the google map. Please try again later.")}function b(a){a.setAnimation(google.maps.Animation.BOUNCE),c(a)}function c(a){setTimeout(function(){a.setAnimation(null)},2e3)}function d(a){for(var b=0;b<r().length;b++)r()[b].setVisible(a)}function e(a){for(var b=0;b<r().length;b++)r()[b].type===F()&&r()[b].setVisible(a)}function f(){d(!1)}function g(a,b){for(var c=0;c<a.length;c++)viewModel.makeMarker(c,b)}function h(a,b){var c=(locations[a].location.lat,locations[a].location.lng,locations[a].location),d=locations[a].title,e=locations[a].type;q=new google.maps.Marker({position:c,title:d,type:e,map:b,animation:google.maps.Animation.DROP}),r.push(q),i(q),m(q)}function i(a){a.addListener("click",function(){b(a),j(a)})}function j(a){void 0===a.venue?(o="https://api.foursquare.com/v2/venues/"+a.id+"?client_id=3GADBQTTZJLISHTNUDHOLMFLZA5X02JZSXVFI1EJPQUJGKO2&client_secret=FQR21B2HNHHE4A5VPNLQHFAFKFQTKUHGSAMFSXGMFCQOXJUV&v=20161005&m=foursquare",$.getJSON(o,function(b){a.venue=b.response.venue,l(a)}).fail(function(a){alert("Sorry, there was a problem loading data for this location. Please try again later."),console.log("Error: "+a)})):l(a)}function k(a){D(!1),j(a),b(a)}function l(a){s(a.venue.name),A(a.venue.categories[0].name),u(a.venue.location.address),t(a.venue.contact.formattedPhone),z(a.venue.price?a.venue.price.message:""),B(a.venue.hours?a.venue.hours.status:""),v(a.venue.url),w(a.venue.rating),y(a.venue.tips.groups[0].items[0].text),E(a.venue.photos.groups[0].items[1].prefix+"width500"+a.venue.photos.groups[0].items[1].suffix),G(""),C("https://foursquare.com/v/"+a.id+"?ref=3GADBQTTZJLISHTNUDHOLMFLZA5X02JZSXVFI1EJPQUJGKO2")}function m(a){p="https://api.foursquare.com/v2/venues/search?client_id=3GADBQTTZJLISHTNUDHOLMFLZA5X02JZSXVFI1EJPQUJGKO2&client_secret=FQR21B2HNHHE4A5VPNLQHFAFKFQTKUHGSAMFSXGMFCQOXJUV&ll=37.761024,-122.421779&query="+a.title+"&v=20161005&m=foursquare",$.getJSON(p,function(b){for(var c=0;c<r().length;c++)a.title===r()[c].title&&(r()[c].id=b.response.venues[0].id)}).fail(function(a){alert("Sorry, there was a problem loading the markers. Please try again later."),console.log("Error: "+a)})}function n(){D(!D())}var o,p,q,r=ko.observableArray(),s=ko.observable(),t=ko.observable(),u=ko.observable(),v=ko.observable(),w=ko.observable(),x=ko.observable(),y=ko.observable(),z=ko.observable(),A=ko.observable(),B=ko.observable(),C=ko.observable(),D=ko.observable(!1),E=ko.observable("./img/valencia_street.jpg"),F=ko.observable(),G=ko.observable("The Mission District - named for the Mission Dolores founded in 1776 - is San Francisco’s oldest neighborhood. Home to a vibrant hispanic community, it boasts the largest concentration of murals in the city. Valencia street is the epicentre of gentrification, with hot new restaurants, boutiques, and cafe's rubbing shoulders with local favorites."),H=ko.observableArray(["All Types of Places","Points of Interest","Historical Places","Cafe's and Bakeries","Art Galleries","Book Stores","Music and Movies","Restaurants and Bars"]),I=ko.computed(function(){return"All Types of Places"===F()?(d(!0),r()):(f(),e(!0),ko.utils.arrayFilter(r(),function(a){return a.type===F()}))});return{dropDown:H,selectedOption:F,makeMarker:h,markers:r,fourSquareDataLoad:j,marker:q,newList:I,rightBoxName:s,rightBoxPhone:t,rightBoxAddress:u,rightBoxUrl:v,rightBoxPhotoUrl:x,rightBoxTips:y,rightBoxPrice:z,rightBoxCategory:A,rightBoxHours:B,rightBoxRating:w,photoUrl:E,defaultIntro:G,initMap:initMap,dataDisplay:l,listViewDisplay:k,attributionLink:C,toggle:n,toggleOpen:D,mapError:a,init:g}}();