
/* 
Skript für die Neuseelandreise
*/

let lat = -42.411667;
let lng = 173.682222;
let zoom = 11;

let stop ={
    nr: 29,
    title: 'Kaikoura',
    user: 'jessimeteo',
    lat: lat,
    lng: lng,
    zoom: zoom
}

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

// Objekt definieren
let course = {
    title: "Webmapping",
    semester: '25S',
    stunden: 3,
    typ: 'VU'
};

console.log('title', course.title);
console.log('semester', course.semester);
console.log('stunden', course.stunden);
console.log('typ', course.typ);

console.log(stop.lat)