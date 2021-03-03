
mapboxgl.accessToken = SECRETS.MAPBOX_TOKEN;

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-79.4512, 43.6568],
	zoom: 13
});
/*
// Add search control inside the map div
map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);
*/
// Create a geocoder to place the search location control's outside the map 
var geocoder = new MapboxGeocoder({
	accessToken: mapboxgl.accessToken,
	mapboxgl: mapboxgl
});

document.getElementById('search-form').appendChild(geocoder.onAdd(map));