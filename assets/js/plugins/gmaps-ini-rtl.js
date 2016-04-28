// https://developers.google.com/maps/documentation/javascript/examples/
function initMap() {
	var customMapType = new google.maps.StyledMapType([
			{
				stylers: [
					{'gamma': 1},
					{'weight': 1},
					{'visibility': 'simplified'},
					{'hue': '#8dab68'}
				]
			},
			{
				elementType: 'labels',
				stylers: [{visibility: 'on'}]
			},
			{
				featureType: 'water',
				stylers: [{color: '#aee2e0'}]
			}
		], {
			name: 'Unify Style'
	});

	var image = new google.maps.MarkerImage(
		'../assets/img/marker.png',
		new google.maps.Size(48,54),
		new google.maps.Point(0,0),
		new google.maps.Point(24,54)
		);

	var customMapTypeId = 'custom_style';

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		scrollwheel: false,
		center: {lat: 41.902820, lng: 88.035777},  // Lombard.
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
		}
	});

	var infowindow = new google.maps.InfoWindow;
	infowindow.setContent('<b>Lombard</b>');

	var marker = new google.maps.Marker({
		map: map,
		clickable: false,
		icon: image,
		position: {lat: 41.902820, lng: 88.035777}
	});

	map.mapTypes.set(customMapTypeId, customMapType);
	map.setMapTypeId(customMapTypeId);
}
