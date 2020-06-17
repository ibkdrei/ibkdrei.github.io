// Mapbox-Karte

// mapboxgl.accessToken = 'pk.eyJ1IjoiY2d1dGgiLCJhIjoiY2syZGVpbzFkMDJpeDNibGtuNnhucDJnMiJ9.YbgYZkJ7Wcb_6wp6GvupHA';
// let map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/cguth/ck3zypy3p4rqq1ck0xkyfhwt0',
//     center: [11.5, 47.25],
//     zoom: 10
// });

// Festlegen der Variablen für die einzelnen Wege
const div = document.getElementById("map");
const breite = div.getAttribute("center-lat");
const laenge = div.getAttribute("center-lng");
const photo_lat = div.getAttribute("photo_lat");
const photo_lng = div.getAttribute("photo_lng");
const spot = div.getAttribute("fotospot src");
const img = document.getElementById("myfoto");
const naehe = div.getAttribute("zoom");
const etappe = div.getAttribute("Nummer")


// Aufsetzen der Karte
let startLayer = L.tileLayer.provider("Esri.WorldTopoMap")
// let startLayer = L.tileLayer.provider("Jawg.Terrain")

let map = L.map("map", {
    center: [breite, laenge],
    zoom: naehe,
    layers: [
        startLayer
    ]
});

let overlay = {
    startpoints: L.featureGroup()
};

for (const start of startpoints) {
    let startmarker = L.marker([start.lat, start.lng], {
        icon: L.icon({
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -37],
            iconUrl: "images/hiking.png"
        })
    }).addTo(overlay.startpoints);
    startmarker.bindPopup(`
        <h2><a target="links" href="${start.tourhtml}"><strong>${start.name}</strong></a></h2>
        <p>Schwierigkeit: ${start.schwierigkeit}</p>
        `);
}
overlay.startpoints.addTo(map);

// Maßstabsleiste
L.control.scale({
    imperial: false
}).addTo(map);


// Abfrage mit querySelector
let xyc = document.querySelector("#NUM");
let Nummera = xyc.dataset.xyz
console.log(ETAPPEN[Nummera].Berg)


// Nummerau = ETAPPEN[Nummera].Nummer
// Land =ETAPPEN[Nummera].Land
// Berg = ETAPPEN[Nummera].Berg
// Beschreibung = ETAPPEN[Nummera].Beschreibung
// Schwierigkeit =  ETAPPEN[Nummera].Schwierigkeit
// Dauer = ETAPPEN[Nummera].Dauer
// Laenge = ETAPPEN[Nummera].KM
// Aufstieg= ETAPPEN[Nummera].Aufstieg
// Abstieg = ETAPPEN[Nummera].Abstieg


// Zuordnung der Tour zu Tourdaten 
let val = ETAPPEN[Nummera].key;

// Abruf des keys mit zugehörigem Wert und Platzierung an der richtigen Stelle
for (const key in ETAPPEN[Nummera]) {
    let val = ETAPPEN[Nummera][key]
    let elem = document.querySelector(`#et-${key}`);
    if (elem) {
        elem.innerHTML = val;
        console.log(val);
    };
};

//Style der Map
var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);

//Plugin GPS
map.locate({
    setView: true,
    maxZoom: 8,
    watch: true,
});


// Foto im Icon platzieren
let fotospot = L.marker([photo_lat, photo_lng], {
    icon: L.icon({
        iconSize: [32, 37],
        iconAnchor: [16, 37],
        popupAnchor: [0, -37],
        iconUrl: "icons/photo.png"
    })
}).addTo(map);
fotospot.bindPopup(
    img, {
        maxWidth: "auto"
    }
);