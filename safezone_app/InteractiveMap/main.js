const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map').setView([4.60971, -74.08175], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

// Agregar mapa base
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});


// Configurar PopUp
function popup(feature,layer){
    if(feature.properties && feature.properties.BARRIO){
        layer.bindPopup("<strong>Barrio: </strong>" + feature.properties.BARRIO + "<br/>" + "<strong>Localidad: </strong>" + feature.properties.LOCALIDAD);
    }
}

// Agregar capa en formato GeoJson
L.geoJson(barrios).addTo(mymap);

var barriosJS = L.geoJson(barrios,{
    onEachFeature: popup
}).addTo(mymap);


// Geocoder
var control = L.control.geonames({
    //position: 'topcenter', // In addition to standard 4 corner Leaflet control layout, this will position and size from top center.
    position: 'topleft',
    geonamesSearch: 'https://secure.geonames.org/searchJSON', // Override this if using a proxy to get connection to geonames.
    geonamesPostalCodesSearch: 'https://secure.geonames.org/postalCodeSearchJSON', // Override this if using a proxy to get connection to geonames.
    username: '', // Geonames account username.  Must be provided.
    maxresults: 5, // Maximum number of results to display per search.
    zoomLevel: null, // Max zoom level to zoom to for location. If null, will use the map's max zoom level.
    className: 'leaflet-geonames-icon', // Class for icon.
    workingClass: 'leaflet-geonames-icon-working', // Class for search underway.
    featureClasses: ['A', 'H', 'L', 'P', 'R', 'T', 'U', 'V'], // Feature classes to search against.  See: http://www.geonames.org/export/codes.html.
    baseQuery: 'isNameRequired=true', // The core query sent to GeoNames, later combined with other parameters above.
    showMarker: true, // Show a marker at the location the selected location.
    showPopup: true, // Show a tooltip at the selected location.
    adminCodes: {}, // Filter results by the specified admin codes mentioned in `ADMIN_CODES`. Each code can be a string or a function returning a string. `country` can be a comma-separated list of countries.
    bbox: {}, // An object in form of {east:..., west:..., north:..., south:...}, specifying the bounding box to limit the results to.
    lang: 'en', // Locale of results.
    alwaysOpen: false, // If true, search field is always visible.
    enablePostalCodes: true, // If true, use postalCodesRegex to test user provided string for a postal code.  If matches, then search against postal codes API instead.
    postalCodesRegex: POSTALCODE_REGEX_US, // Regex used for testing user provided string for a postal code.  If this test fails, the default geonames API is used instead.
    title: 'Search by location name or postcode', // Search input title value.
    placeholder: 'Enter a location name' // Search input placeholder text.
});
map.addControl(control);
