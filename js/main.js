/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.
var map = L.map('map-container').setView([46.852, -121.760], 13);
// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:

/* L.tileLayer('http://{s}.tiles.mapbox.com/v3/kimmyrae.m2504n80/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18 */
/* }).addTo(map); */
L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
}).addTo(map);
 
// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)
var marker = L.marker([46.852, -121.760]).addTo(map);
/*var circle = L.circle([46.852, -121.760], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);*/

var popup = L.popup()
    .setLatLng([46.852, -121.760])
    .setContent("Mount Rainier is right here! Elevation is 14,411 ft (4,392 m)")
    .openOn(map);

var marker1 = L.marker([46.852, -121.760]).addTo(map);
marker1.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");
	
var marker2 = L.marker([46.8495529, -121.7123171]).addTo(map);
	marker2.bindPopup("<b>Little Tahoma Peak</b><br>Elevation:11,138' (3,395 m), Mountain range-Cascade Range, First ascent:1894");
	  
	
var marker3 = L.marker([46.851, -121.759]).addTo(map);
	marker3.bindPopup("<b>Emmons Glacier</b><br>Emmons Glacier has the largest surface area of any glacier in the contiguous United States.");
	
/*var greenIcon = L.icon({
    iconUrl: 'leaf-green.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});*/
L.marker([46.852, -121.760], {icon: greenIcon}).addTo(map);
