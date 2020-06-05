let startLayer = L.tileLayer.provider("Stamen.TerrainBackground");

let map = L.map("map", {
    center: [46.3, 11.504914],
    zoom: 6.5,
    layers: [
        startLayer
    ]
});

let mrk = L.marker([47.26756, 11.39076]
).addTo(map);

let overlay = {
    startpoints: L.featureGroup()
};

for (const start of startpoints) {
    console.log (start);
    let startmarker = L.marker([start.lat, start.lng]).addTo(overlay.startpoints)
L.marker([start.lat, start.lng]).addTo(map);
    startmarker.bindPopup(`Tour ${start.name}`)
}
<<<<<<< HEAD
overlay.startpoints.addTo(map)

=======
overlay.startpoints.addTo(map)
>>>>>>> a8b9e8ec5674e119ebc171a46ee7e493a9c7fe8f
