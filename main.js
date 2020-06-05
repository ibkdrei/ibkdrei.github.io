let startLayer = L.tileLayer.provider("Stamen.TerrainBackground");

let map = L.map("map", {
    center: [46.3, 11.504914],
    zoom: 6.5,
    layers: [
        startLayer
    ]
});

let mrk = L.marker([47.26756, 11.39076]).addTo(map);

let overlay = {
    startpoints: L.featureGroup()
};

for (const start of startpoints) {
    console.log(start);
    let startmarker = L.marker([start.lat, start.lng], {
        icon: L.icon({
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -37],
            iconUrl: "images/hiking_leicht.png"
        })
    }).addTo(overlay.startpoints);
    L.marker([start.lat, start.lng]).addTo(map);

    startmarker.bindPopup(`Tour ${start.name}`);
}
overlay.startpoints.addTo(map);