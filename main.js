let startLayer = L.tileLayer.provider("Stamen.TerrainBackground");

let map = L.map("map", {
    center: [46.3, 11.504914],
    zoom: 6.5,
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
        startmarker.bindPopup (`
        <h3>${start.name}</h3>
        <p>Schwierigkeit: ${start.schwierigkeit}</p>
        `);
}
overlay.startpoints.addTo(map);

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
rainviewer.addTo(map);