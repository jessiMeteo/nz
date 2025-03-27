
/* 
Skript für die Neuseelandreise
*/

let lat = -42.411667;
let lng = 173.682222;
let zoom = 11;

// Karte initialisieren
let map = L.map('map').setView([lat, lng], zoom);


// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//L. steht für Leaflet, View([long, lat], zoomfaktor)

// Marker zeichnen
let marker = L.marker([lat, lng]).addTo(map);

// Popup definieren und öffnen
marker.bindPopup(`
    <h2> Kaikoura </h2>
    <ul>
        <li> Geogr. Breite: ${lat.toFixed(5)}° </li>
        <li> Geogr. Länge: ${lng.toFixed(5)}° </li>
    </ul>.
`).openPopup();