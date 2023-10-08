
(function($){
    'use strict';
    jQuery( document ).ready(function() {
        var map             = jQuery('#map_canvas');
        var mapIcon         = map.data('map-icon');
        var mapTitle        = map.data('map-title');
        var mapLatitute     = map.data('map-latitute');
        var mapLongitute    = map.data('map-longitude');
        var mapZoom         = map.data('map-zoom');
        if ($('#map_canvas').length){
            google.maps.event.addDomListener(window, "load", gentle_man_google_map);
        }
        function gentle_man_google_map() {
            
            //Google map
	var styleArray = [
		  {
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#EDEDED"
			  }
			]
		  },
		  {
			"elementType": "labels.icon",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#616161"
			  }
			]
		  },
		  {
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#EDEDED"
			  }
			]
		  },
		  {
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#bdbdbd"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#eeeeee"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#757575"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#e5e5e5"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#ffffff"
			  }
			]
		  },
		  {
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#757575"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#BCBCBC"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#616161"
			  }
			]
		  },
		  {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  }
			]
		  },
		  {
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#e5e5e5"
			  }
			]
		  },
		  {
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#eeeeee"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#c9c9c9"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  }
			]
		  }

	];			  
	var mapOptions = {
	  center: new google.maps.LatLng(mapLatitute,mapLongitute),
	  zoom: mapZoom,
	  styles: styleArray,
	  scrollwheel: false,
	  backgroundColor: 'transparent',
      mapTypeControl: false,				  
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),
		mapOptions);				
	var myLatlng = new google.maps.LatLng(mapLatitute,mapLongitute);			
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: mapTitle,
		icon: mapIcon,
	});			
        }
    });
}(jQuery));

