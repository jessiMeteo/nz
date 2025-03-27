
/* 
Skript für die Neuseelandreise
*/

// Karte initialisieren
var map = L.map('map').setView([-42.411667, 173.682222], 13);

// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//L. steht für Leaflet, View([long, lat], zoomfaktor)

// Marker zeichnen
var marker = L.marker([-42.411667, 173.682222]).addTo(map);

// Popup definieren und öffnen
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();