
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

// Use AJAX to request a temporary token
function createTemporaryToken() {
	const Http = new XMLHttpRequest();
	const url = 'https://api.mapbox.com/tokens/v2/ripsnake?access_token='+mapboxgl.accessToken;
	
	// To parse object attributes to params
	var params = new Object();
	params.expires = Date();
	params.scopes = ['styles:read', 'fonts:read'];

	// Turn the data object into an array of URL-encoded key/value pairs.
	let urlEncodedData = "", urlEncodedDataPairs = [], name;
	for( name in params ) {
	 urlEncodedDataPairs.push(encodeURIComponent(name)+'='+encodeURIComponent(params[name]));
	}

	console.log(urlEncodedData);
	console.log(urlEncodedDataPairs);

	Http.open('POST',url, true);

	Http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	
	Http.send(urlEncodedDataPairs);

	Http.onreadystatechange = (e) =>{
		console.log(Http.responseText);
	}	
}

function fetchToken() {
	const url = 'https://api.mapbox.com/tokens/v2/ripsnake?access_token='+mapboxgl.accessToken;
	reqBody = {
		expires: (Date() + 300000000000),
		scopes: ['styles:read', 'fonts:read']
	};
	
	const optParams = {
		headers: {
			'content-type':'application/json; charset=UTF-8' 
		},
		body:reqBody,
		method:'POST'
	}

	fetch(url, optParams)
		.then(reqBody=>{return data.json})
		.then(res=>{console.log(res)})
		.catch(error=>{console.log(error)});
}