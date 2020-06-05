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
    startmarker.bindPopup(`Tour ${start.name} ${start.schwierigkeit}`);
}
overlay.startpoints.addTo(map);