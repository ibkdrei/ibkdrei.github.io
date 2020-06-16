let startLayer = L.tileLayer.provider("Stamen.TerrainBackground");

let mainmap = L.map("mainmap", {
    center: [46.3, 11.504914],
    zoom: 6.5,
    layers: [
        startLayer
    ]
});

var mainmapStyle = {
    color: 'white',
    fillOpacity: '0%',
    fillColor: 'white'
    
}
let boundaries = L.geoJson(BOUNDARIES,{
    style: mainmapStyle
}).addTo(mainmap)
mainmap.fitBounds(boundaries.getBounds());




function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#90ee90',
        dashArray: '',
        fillOpacity: 0.7
    });
};

function resetHighlight(e) {
    geojson.resetStyle(e.target);
};


function onClick(e) {
    window.open("https://ibkdrei.github.io/wege.html");
}

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



let rainviewer = L.control.rainviewer({
    position: 'bottomleft',
    nextButtonText: '>',
    playStopButtonText: 'Play/Stop',
    prevButtonText: '<',
    positionSliderLabelText: "Hour:",
    opacitySliderLabelText: "Opacity:",
    animationInterval: 500,
    opacity: 0.5
});
rainviewer.addTo(mainmap);