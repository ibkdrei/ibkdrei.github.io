// Aufsetzen der mainmap auf der Startseite mithilfe leaflet-providers

let startLayer = L.tileLayer.provider("Stamen.TerrainBackground");

let mainmap = L.map("mainmap", {
    center: [46.3, 11.504914],
    zoom: 6.5,
    layers: [
        startLayer
    ]
});

// Festlegen des Styles der mainmap
var mainmapStyle = {
    color: 'white',
    fillOpacity: '0%',
    fillColor: 'white'
    
}

// Layer mit Ländergrenzen zur Karte hinzufügen
let boundaries = L.geoJson(BOUNDARIES,{
    style: mainmapStyle
}).addTo(mainmap)
mainmap.fitBounds(boundaries.getBounds());

// Funktionen für den klickbaren Layer

// aufleuchten bei Cursorberührung
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#90ee90',
        dashArray: '',
        fillOpacity: 0.7
    });
};

// Beenden des Aufleuchtens
function resetHighlight(e) {
    geojson.resetStyle(e.target);
};

//Öffnen des wege.html bei Mausklick
function onClick(e) {
    window.open("https://ibkdrei.github.io/wege.html");
}

//Anwendung der Funktionen für alle Features und Hinzufügen zur Karte
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: onClick
    });
};

geojson = L.geoJson(BOUNDARIES, {

    onEachFeature: onEachFeature
}).addTo(mainmap);


// Rainviewer Plugin

let rainviewer = L.control.rainviewer({
    position: 'topright',
    nextButtonText: '>',
    playStopButtonText: 'Play/Stop',
    prevButtonText: '<',
    positionSliderLabelText: "Hour:",
    opacitySliderLabelText: "Opacity:",
    animationInterval: 500,
    opacity: 0.5
});
rainviewer.addTo(mainmap);