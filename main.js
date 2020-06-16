let startLayer = L.tileLayer.provider("Stamen.TerrainBackground");

let mainmap = L.map("mainmap", {
    center: [46.3, 11.504914],
    zoom: 6.5,
    layers: [
        startLayer
    ]
});



// let overlay = {
//     startpoints: L.featureGroup()
// };

// for (const start of startpoints) {
//     let startmarker = L.marker([start.lat, start.lng], {
//         icon: L.icon({
//             iconSize: [32, 37],
//             iconAnchor: [16, 37],
//             popupAnchor: [0, -37],
//             iconUrl: "images/hiking.png"
//         })
//     }).addTo(overlay.startpoints);
//     startmarker.bindPopup(`
//         <h3>${start.name}</h3>
//         <p>Schwierigkeit: ${start.schwierigkeit}</p>
//         `);
// }
// overlay.startpoints.addTo(map);

let boundaries = L.geoJson(BOUNDARIES).addTo(mainmap)
mainmap.fitBounds(boundaries.getBounds());

let adm = BOUNDARIES



function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
};

function resetHighlight(e) {
    geojson.resetStyle(e.target);
};


// function onClick(e) {
//     for (const key1 in BOUNDARIES[properties.admin]) {
//         if (key1 == Austria) {
//             window.open("https://ibkdrei.github.io/wege.html");
//         } else {
//             window.open("https.//ibkdrei.github.zukunft.html");
//         }
//     }
// };



// for (key1 in adm) {
//     console.log(BOUNDARIES[adm].admin)
// };



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

// country.onclick = function () {

// }


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